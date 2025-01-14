# Example of a strictly-typed NATS and protobuf client

Install the [bun javascript runtime](https://bun.sh/), then run the example code with

```
bun install
bun run index.ts
```

To update the data types, modify `datatypes.proto`, then

```
 bun run pbjs -t static-module -w es6 -o datatypes.js datatypes.proto
 bun run pbts -o datatypes.d.ts datatypes.js
```
