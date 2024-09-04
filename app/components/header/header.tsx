import HeaderLogo from "@/app/components/header/logo";
import HeaderCtas from "@/app/components/header/ctas";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo />
            <HeaderCtas />
        </HeaderContainer>
    );
}

function HeaderContainer({ children }) {
    return (
        <header className="fixed left-0 right-0 top-0 z-10 bg-yellow-100 h-20 px-10 rounded-full flex justify-between items-center">
            {children}
        </header>
    );
}
