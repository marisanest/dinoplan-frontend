import "server-only";
import { ReflowAuth } from "@reflowhq/auth-next";

export default function getAuth(): ReflowAuth {
    const { SESSION_SECRET, REFLOW_PROJECT_ID } = process.env;
    const config = {
        projectID: Number(REFLOW_PROJECT_ID),
        secret: String(SESSION_SECRET),
        cookieMaxAge: 60 * 60 * 24,
    };
    return new ReflowAuth(config);
}