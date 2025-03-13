import imageUrlBuilder from "@sanity/image-url";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";
import {sanityClient} from "@/lib/sanity/client";

const builder = imageUrlBuilder(sanityClient)

export function getImageUrlBuilder(source: SanityImageSource): ImageUrlBuilder {
    return builder.image(source)
}