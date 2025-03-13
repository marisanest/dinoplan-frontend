import Banner from "@/app/components/banner";
import React from "react";

export default function FooterBannerContainer({children}: {children: React.ReactNode}) {
    return (
        <Banner className="bg-orange" isFooter>
            <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center">
                {children}
            </div>
        </Banner>
    );
}