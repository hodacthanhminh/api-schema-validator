import {
    SchemaGenerator,
    createProgram,
    createParser,
    createFormatter,
    Config,
    Schema,
} from "ts-json-schema-generator";
import Ajv from "ajv";
import { resolve } from "path";
import { expect } from "vitest";

const BASE_PATH = "node_modules/@gooddata/sdk-backend-spi/";

export function createSchema({ type ,...others}: Config): Schema {
    const config: Config = {
        path: resolve(BASE_PATH + "**/*.d.ts"),
        type,
        ...others,
    };

    const program = createProgram(config);
    const generator = new SchemaGenerator(
        program,
        createParser(program, config),
        createFormatter(config),
        config,
    );
    return generator.createSchema(config.type);
}

export function validateTypeSchema(config: Config) {
        const schema = createSchema(config);
        const ajv = new Ajv.default();
        ajv.validateSchema(schema);
        expect(ajv.errors).toBeNull();
}

export function validateDataSchema(assertData: any, config: Config) {
        const schema = createSchema(config);
        const ajv = new Ajv.default();
        const validate = ajv.compile(schema);
        expect(validate(assertData)).toBe(true);
}
