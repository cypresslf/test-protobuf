#!/bin/bash

bun run pbjs -t static-module -w es6 -o datatypes.js datatypes.proto
bun run pbts -o datatypes.d.ts datatypes.js
protoc --python_out=. --pyi_out=. --js_out=import_style=commonjs,binary:. datatypes.proto
