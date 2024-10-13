import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "qaqk6pu0",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
    token: process.env.SANITY_TOKEN,
});