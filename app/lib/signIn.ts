"use server";

import { compareSync } from "bcryptjs";
import getAuth from "@/lib/auth";

export async function signIn(
    prevState: any,
    formData: FormData = new FormData(),
) {
    // Verify the passphrase

    const { HASHED_PASSPHRASE } = process.env;
    const inputPassword = 'dinostark' // formData.get("password");

    if (!compareSync(inputPassword as string, HASHED_PASSPHRASE as string)) {
        return {
            error: "Falsches Passwort",
        };
    }

    const auth = getAuth();
    await auth.set("hasAccess", true);
    return { success: true };
}

export async function signOut(
    prevState: any,
    formData: FormData = new FormData(),
) {
    // Destroy the session
    const auth = getAuth();
    await auth.clear();
    return { success: true };
}

export async function getSession() {
    const auth = getAuth();
    return await auth.all();
}