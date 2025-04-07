import cn from "clsx";
import React from "react";

type DinoplanFormTextInputProps = {
    name: string;
    placeholder: string;
    register: any;
    pending: boolean;
    defaultValue: string;
}

export default function DinoplanFormTextInput({name, placeholder, register, pending, defaultValue}: DinoplanFormTextInputProps) {
    return (
        <input id={name}
               type="text"
               className={cn(
                   "min-h-input-field w-full text-left px-[1rem] !rounded-none !border-2",
                   pending ? 'bg-orange-100 !border-blue-600-faded !text-blue-600-faded' : '!bg-yellow-100 border-blue-600-faded focus:border-blue !text-blue-600'
               )}
               name={name}
               placeholder={placeholder}
               disabled={pending}
               defaultValue={defaultValue}
               {...register(name)} />
    );
}