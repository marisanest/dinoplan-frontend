
export default function HeaderCtas() {
    return (
        <HeaderCtasContainer>
            <a href="/" className="text-blue-600">Beitrag berechnen</a>
            <a href="/" className="text-yellow-100 bg-orange rounded-full px-6 py-2">Termin vereinbaren</a>
            <a href="/" className="text-blue-600">Fragen?</a>
        </HeaderCtasContainer>
    );
}

function HeaderCtasContainer({ children }) {
    return (
        <div className="flex gap-6 items-center">
            {children}
        </div>
    );
}
