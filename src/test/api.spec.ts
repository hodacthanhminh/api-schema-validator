import { describe, test } from "vitest";
import { validateDataSchema, validateTypeSchema } from "@/helpers/jsonSchemaValidator.js";
import { requestMock } from "@/test/__mocks__/apiResponse.js";

describe("JSON Schema validate", () => {
    test("Type should be valid JSON Schema", () => {
        validateTypeSchema({ type: "IElementsQueryResult" });
    });
    
    test("API response should match JSON Schema", async () => {
        const response = await requestMock();
        validateDataSchema(response, { type: "IElementsQueryResult" });
    });
});
