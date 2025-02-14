# Example of a strictly-typed NATS and protobuf client

# Javascript

Install the [bun javascript runtime](https://bun.sh/), then run the example code with

```
bun install
bun run example.ts
```

# Python

Install the [uv python package manager](https://docs.astral.sh/uv/#installation), then run the example code with

```
uv run example.py
```

# Updating the data types

[Install `protoc`](https://grpc.io/docs/protoc-installation/), modify `datatypes.proto`, then

```
./gen-datatypes.sh
```

In the future, we should ideally autogenerate `api.ts` as well.
