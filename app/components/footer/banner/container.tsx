import Banner from "@/app/components/banner";
import React from "react";

export default function FooterBannerContainer({children}: {children: React.ReactNode}) {
    return (
        <Banner className="bg-orange" isFooter>
            <div className="w-full flex xs:grid xs:grid-cols-[1fr_auto_1fr] items-center justify-center gap-x-[16px]">
                {children}
            </div>
        </Banner>
    );
}