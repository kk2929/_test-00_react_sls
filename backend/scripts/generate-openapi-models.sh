#!/bin/bash

INPUT_DIR=./openapi/defs
OUTPUT_DIR=./src/openapi/generated

cp -R $INPUT_DIR $OUTPUT_DIR/temp
echo {} > $OUTPUT_DIR/models.json

for file in `find $OUTPUT_DIR/temp -name 'models.yml'`; do
  yarn --silent json-refs resolve ${file} > $OUTPUT_DIR/temp/models_combined_ref.json
  yarn --silent json-merger -p $OUTPUT_DIR/models.json $OUTPUT_DIR/temp/models_combined_ref.json -o $OUTPUT_DIR/models.json
done

echo -E "export default $(cat $OUTPUT_DIR/models.json) as const;" > $OUTPUT_DIR/models.ts

rm $OUTPUT_DIR/models.json
rm -R $OUTPUT_DIR/temp