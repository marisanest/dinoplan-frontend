import Banner from "@/app/components/banner";
import React from "react";

export default function FooterBannerContainer({children}: {children: React.ReactNode}) {
    return (
        <Banner className="bg-orange" isFooter>
            <div className="w-full flex items-center justify-center gap-[1rem] xs:gap-[1.5rem] ss:gap-[3rem]">
                {children}
            </div>
        </Banner>
    );
}