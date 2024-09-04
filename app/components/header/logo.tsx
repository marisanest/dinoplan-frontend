
export default function HeaderLogo() {
    return (
        <HeaderLogoContainer>
            <a href="/">Dinoplan</a>
        </HeaderLogoContainer>
    );
}

function HeaderLogoContainer({ children }) {
    return (
        <div className="text-blue-600 font-bold text-4xl">
            {children}
        </div>
    );
}
