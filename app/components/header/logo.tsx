import Logo from "@/components/logo/logo";

export default function HeaderLogo() {
    return (
        <HeaderLogoContainer>
            <a href="/"><Logo/></a>
        </HeaderLogoContainer>
    );
}

function HeaderLogoContainer({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}
