export function getMetadata(title = "Dinoplan", description = "Dinoplan - Der Plan für dich und dein Kind.") {
    return {
        title: title,
        description: description,
        openGraph: {
            type: "website",
            url: "https://dinoplan.de",
            title: title,
            description: description,
            siteName: "Dinoplan",
            images: [{
                url: "https://dinoplan.de/ogn.png",
            }],
        },
    };
}