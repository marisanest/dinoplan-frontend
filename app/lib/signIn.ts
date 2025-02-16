"use server";

import { compareSync } from "bcryptjs";
import getAuth from "@/lib/auth";

export async function signIn(
    prevState: any,
    formData: FormData = new FormData(),
) {
    // Verify the passphrase

    const { HASHED_PASSPHRASE } = process.env;
    const inputPassword = formData.get("password");

    // if (!compareSync('dinostark' as string, '\\$2a\\$08\\$hdcXWBF7GbW5M3YIp3FrZOEwl9xjIaaJ6EQoTEi1b8ejp2dkeb/iS' as string)) {
    //     return {
    //         error: "Falsches Passwort",
    //     };
    // }

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