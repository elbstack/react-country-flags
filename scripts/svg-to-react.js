const { promisify } = require('util');

const fs = require('fs');
const path = require('path');

const readDirectoryAsync = promisify(fs.readdir);
const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);
const statAsync = promisify(fs.stat);
const svgr = require('@svgr/core').default;
const crypto = require('crypto');

const dirPath = 'src/flags/react';
const sourcePath = 'src/flags/svg';
const outFile = 'index.js';

const fileTemplate = flags => `export default {
${flags}
};
`;

const fileTestTemplate = flag => `import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './${flag}';

it('${flag} renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
`;

const isFile = async filePath => {
  try {
    const stat = await statAsync(filePath);
    return stat.isFile();
  } catch (ex) {
    return false;
  }
};

const regexDoubleProps = () => / {\.\.\.props}/gm;
const regexId = () => /id="(.)"/gm;
const replaceSomething = (search, replace, str) => str.replace(new RegExp(search, 'g'), replace);
const replaceId = (str, [search, replace]) => replaceSomething(`"${search}"`, `"${replace}"`, str);
const replaceXlinkHref = (str, [search, replace]) =>
  replaceSomething(`xlinkHref="#${search}"`, `xlinkHref="#${replace}"`, str);
const replaceClipPath = (str, [search, replace]) =>
  replaceSomething(`clipPath="url\\(#${search}\\)"`, `clipPath="url(#${replace})"`, str);

const snakeToCamel = str => {
  return (str.charAt(0).toUpperCase() + str.slice(1)).replace(/(\-\w)/g, m => m[1].toUpperCase());
};

const getHash = str => {
  const shasum = crypto.createHash('sha1');
  shasum.update(str);
  return 's' + shasum.digest('hex').substr(0, 8);
};

const clearDirectory = async directory => {
  const dirContent = await readDirectoryAsync(directory);
  await Promise.all(
    dirContent
      // filter underscore directories
      .filter(name => name.indexOf('__') === -1)
      .map(async file => {
      unlinkAsync(path.resolve(directory, file));
    })
  );
};

async function main() {
  try {
    await clearDirectory(dirPath);
    const dirContent = await readDirectoryAsync(sourcePath);
    const entries = (await Promise.all(
      dirContent
        // filter dashed country names
        .filter(name => name.indexOf('-') === -1)
        .map(async (name, i) => {
          const entryIsFile = await isFile(path.resolve(sourcePath, name));
          if (entryIsFile) {
            const content = await readFileAsync(path.resolve(sourcePath, name));
            const strippedName = name.substr(0, name.indexOf('.'));
            let component = await svgr(
              content,
              { noDimensions: true },
              { componentName: 'Flag' + snakeToCamel(strippedName) }
            );

            if (component.indexOf('xmlnsXlink') > 0) {
              component
                .match(regexId())
                .map(rx => regexId().exec(rx)[1])
                .map(id => {
                  return [id, getHash(`${strippedName}-${id}`)];
                })
                .forEach(replacer => {
                  component = replaceId(component, replacer);
                  component = replaceXlinkHref(component, replacer);
                  component = replaceClipPath(component, replacer);
                });
            }

            if (component.match(regexDoubleProps()).length > 1) {
              component = component.replace(regexDoubleProps(), (match, offset) => (offset > 128 ? '' : match));
            }

            const fileName = `Flag${snakeToCamel(strippedName)}`;

            await writeFileAsync(path.resolve(dirPath, `${fileName}.js`), component, {
              encoding: 'utf8',
            });
            await writeFileAsync(path.resolve(dirPath, `${fileName}.test.js`), fileTestTemplate(fileName), {
              encoding: 'utf8',
            });
            return name;
          }
          return null;
        })
    ))
      .filter(Boolean)
      .filter(name => name.indexOf('index') < 0)
      .map(name => name.substr(0, name.indexOf('.')))
      .map(name => `  '${name}': () => import(/* webpackChunkName: "flag-${name}" */ './Flag${snakeToCamel(name)}'),`)
      .join('\n');
    // console.log(entries);
    // console.log(fileTemplate(entries));
    await writeFileAsync(path.resolve(dirPath, outFile), fileTemplate(entries), {
      encoding: 'utf8',
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}

main();
