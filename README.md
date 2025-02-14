# Example of a strictly-typed NATS and protobuf client

# Javascript

Install the [bun javascript runtime](https://bun.sh/), then run the example code with

```
bun install
bun run example.ts
```

To update the data types, modify `datatypes.proto`, then

```
 bun run pbjs -t static-module -w es6 -o datatypes.js datatypes.proto
 bun run pbts -o datatypes.d.ts datatypes.js
```

In the future, we should ideally autogenerate `api.ts` based on `datatypes.proto` as well.

# Python

Install the [uv python package manager](https://docs.astral.sh/uv/#installation), then run the example code with

```
uv run example.py
```

To update the data types, [install `protoc`](https://grpc.io/docs/protoc-installation/), modify `datatypes.proto`, then

```
protoc --python_out=. --pyi_out=. datatypes.proto
```
