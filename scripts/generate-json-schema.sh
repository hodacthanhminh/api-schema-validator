#!/usr/bin/env bash

TYPE_PATH="node_modules/@gooddata/sdk-backend-spi/esm/index.d.ts"
TYPE_NAME="IElementsQueryResult"

yarn install
npx ts-json-schema-generator --path "$TYPE_PATH" --type "$TYPE_NAME" > "schema.json"