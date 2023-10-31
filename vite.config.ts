// (C) 2023 GoodData Corporation
import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    test: {
        setupFiles: "./setupTests.ts",
        include: ["**/src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
    plugins: [tsconfigPaths()]
});