import { resolve } from "path";
import { writeFileSync } from "fs";
import {
    SchemaGenerator,
    createProgram,
    createParser,
    createFormatter,
    Config,
} from "ts-json-schema-generator";

export function generateJSONSchema({ path, type, ...others }: Config) {
    const config: Config = { path, type , ...others};

    const program = createProgram(config);
    const generator: SchemaGenerator = new SchemaGenerator(
        program,
        createParser(program, config),
        createFormatter(config),
    );
    const schema = generator.createSchema(type);

    writeFileSync("schema.json", JSON.stringify(schema, null, 2), "utf8");
}

generateJSONSchema({
    type: "IElementsQueryResult",
    path: resolve("node_modules/@gooddata/sdk-backend-spi/esm/index.d.ts")
});
