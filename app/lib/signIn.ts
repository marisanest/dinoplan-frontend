"use server";

import { compareSync } from "bcryptjs";
import getAuth from "@/lib/auth";

export async function signIn(
    prevState: any,
    formData: FormData = new FormData(),
) {
    const { HASHED_PASSPHRASE } = process.env;
    const inputPassword = formData.get("password");

    if (!compareSync(inputPassword, HASHED_PASSPHRASE)) {
        return {
            error: "Falsches Passwort",
        };
    }

    const auth = getAuth();
    await auth.set("hasAccess", true);
    return { success: true };
}

export async function getSession() {
    const auth = getAuth();
    return await auth.all();
}