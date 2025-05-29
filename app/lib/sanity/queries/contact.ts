import {defineQuery} from "groq";

export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    email,
}`);