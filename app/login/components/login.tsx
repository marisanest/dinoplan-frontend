"use client"
import {signIn} from "@/lib/signIn";
import {useFormState, useFormStatus} from "react-dom";
import Text from "@/components/text/text";
import FormButton from "@/components/buttons/formButton";
import {redirect} from "next/navigation";

export default function Login() {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState<{
        success?: boolean;
        error?: string;
    }>(signIn, {});

    if (state.success) {
        redirect('/')
    }

    return (
        <main className="w-dvw max-w-dvw h-dvh max-h-dvh overflow-hidden flex justify-center items-center bg-orange-200">
            <form action={formAction}>
                <div className="flex flex-col gap-[1rem]">
                    <div className="flex flex-col gap-[0.5rem]">
                        <label htmlFor="password">
                            <Text align="left" size="md">Passwort</Text>
                        </label>
                        <input id="password"
                               className="appearance-none border-[2px] border-blue-600 px-3 py-2 leading-tight focus:outline-none bg-yellow-100"
                               name="password"
                               type="password"
                               placeholder=""
                               autoComplete="off"/>
                        {state.error && (
                            <Text align="left" size="xs" color="red">
                                {state.error}
                            </Text>
                        )}
                    </div>

                    <FormButton size="sm" color="orange" disabled={pending}>
                        Anmelden
                    </FormButton>
                </div>
            </form>
        </main>
    );
}