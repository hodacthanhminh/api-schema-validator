import { vi } from "vitest";

const responseData = {
    limit: 20,
    offset: 0,
    totalCount: 4846,
    items: [
        {
            title: "38",
            uri: "38",
        },
        {
            title: "78",
            uri: "78",
        },
        {
            title: "224",
            uri: "224",
        },
        {
            title: "545",
            uri: "545",
        },
        {
            title: "552",
            uri: "552",
        },
        {
            title: "955129",
            uri: "955129",
        },
        {
            title: "955131",
            uri: "955131",
        },
        {
            title: "955133",
            uri: "955133",
        },
        {
            title: "955139",
            uri: "955139",
        },
        {
            title: "955141",
            uri: "955141",
        },
        {
            title: "955143",
            uri: "955143",
        },
        {
            title: "955145",
            uri: "955145",
        },
        {
            title: "955147",
            uri: "955147",
        },
        {
            title: "955153",
            uri: "955153",
        },
        {
            title: "955155",
            uri: "955155",
        },
        {
            title: "955157",
            uri: "955157",
        },
        {
            title: "955159",
            uri: "955159",
        },
        {
            title: "955163",
            uri: "955163",
        },
        {
            title: "955165",
            uri: "955165",
        },
        {
            title: "955167",
            uri: "955167",
        },
    ],
};

export const requestMock = vi.fn().mockResolvedValue(responseData);
