# react-country-flags

You need flags in your react-project and you don't want to load all flags of the world instant in your application?

```javascript 1.8
<Flag country="de" isSquare={true} />
```

All flags are svg transpile to react components and they load async in your project.

## api
### country
Use a two-letter country-code as specific in [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

### isSquare
The flag is centered in a square area.
