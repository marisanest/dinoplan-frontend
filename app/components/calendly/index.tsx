import {useEffect} from "react";
import cn from "clsx";

export default function Calendly({className, baseUrl}: {className: string; baseUrl: string}) {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);
    }, []);

    return (
        <div className={cn("calendly-inline-widget", className)}
             data-url={`${baseUrl}?background_color=fffffa&text_color=294290&primary_color=e6b45a`}>
        </div>
    );
}