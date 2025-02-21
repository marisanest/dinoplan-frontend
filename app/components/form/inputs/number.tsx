import cn from "clsx";
import React from "react";

export default function DinoplanFormNumberInput({name, placeholder, register, pending, options}: { name: string; placeholder: string; register: any, pending: boolean; options: any }) {
    return (
        <input id={name}
               type="number"
               className={cn(
                   "min-h-[55px] w-full text-left px-[1rem] !rounded-none !border-2",
                   pending ? '!border-blue-600-faded !text-blue-600-faded' : '!bg-yellow-100 border-blue-600-faded focus:border-blue !text-blue-600'
               )}
               name={name}
               placeholder={placeholder}
               disabled={pending}
               {...options}
               {...register(name)} />

    );
}