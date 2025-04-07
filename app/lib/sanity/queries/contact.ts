import {defineQuery} from "groq";

export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0] {
    _id, 
    email,
    calendly,
}`);