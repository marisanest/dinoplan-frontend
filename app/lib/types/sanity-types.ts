/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type Contact = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: Link;
  calendly?: Link;
};

export type Customer = {
  _id: string;
  _type: "customer";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  childName?: string;
  childAge: number;
  phoneNumber?: string;
  serviceModules?: Array<{
    name: string;
    costPerMonth: number;
    _key: string;
  }>;
  state: "Neu" | "In Bearbeitung (Dominik)" | "In Bearbeitung (Florian)" | "Gewonnen (Dominik)" | "Gewonnen (Florian)" | "Verloren (Dominik)" | "Verloren (Florian)" | "Unvollst\xE4ndige Daten";
  note?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type CostCalculation = {
  _id: string;
  _type: "costCalculation";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  inflationRate: number;
  interestRate: number;
  generalNote?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type PageSectionsPrivacy = {
  _id: string;
  _type: "pageSectionsPrivacy";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type PageSectionsFaq = {
  _id: string;
  _type: "pageSectionsFaq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  subTitle: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  questions?: Array<{
    question?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "question";
    };
    _key: string;
  }>;
  illustration: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Question = {
  _id: string;
  _type: "question";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  question: string;
  answer: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type PageSectionsAbout = {
  _id: string;
  _type: "pageSectionsAbout";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  personalFeatures?: Array<{
    personalFeature?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "personalFeature";
    };
    _key: string;
  }>;
  illustration: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type PersonalFeature = {
  _id: string;
  _type: "personalFeature";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type PageSectionsServiceModules = {
  _id: string;
  _type: "pageSectionsServiceModules";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceModules?: Array<{
    serviceModule?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "serviceModule";
    };
    _key: string;
  }>;
};

export type PageSectionsServiceFeatures = {
  _id: string;
  _type: "pageSectionsServiceFeatures";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceFeatures?: Array<{
    serviceFeature?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "serviceFeature";
    };
    _key: string;
  }>;
};

export type PageSectionsServiceSegments = {
  _id: string;
  _type: "pageSectionsServiceSegments";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceSegments?: Array<{
    serviceSegment?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "serviceSegment";
    };
    _key: string;
  }>;
};

export type PageSectionsStart = {
  _id: string;
  _type: "pageSectionsStart";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  subTitle: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  illustration: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type ServiceFeature = {
  _id: string;
  _type: "serviceFeature";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  illustration: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type ServiceSegment = {
  _id: string;
  _type: "serviceSegment";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  listName?: string;
  dinoPrefix?: string;
  illustration?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  dinoSubtitle?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceModules?: Array<{
    serviceModule?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "serviceModule";
    };
    _key: string;
  }>;
};

export type ServiceModule = {
  _id: string;
  _type: "serviceModule";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  serviceSegment: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "serviceSegment";
  };
  costCalculationForFinancialInvestment?: {
    cost?: number;
    ageAtPayout?: number;
  };
  costPerMonthForInsurance?: {
    costPerMonthForInsurance_1?: number;
    costPerMonthForInsurance_2?: number;
    costPerMonthForInsurance_3?: number;
    costPerMonthForInsurance_4?: number;
    costPerMonthForInsurance_5?: number;
    costPerMonthForInsurance_6?: number;
    costPerMonthForInsurance_7?: number;
    costPerMonthForInsurance_8?: number;
    costPerMonthForInsurance_9?: number;
    costPerMonthForInsurance_10?: number;
    costPerMonthForInsurance_11?: number;
    costPerMonthForInsurance_12?: number;
    costPerMonthForInsurance_13?: number;
    costPerMonthForInsurance_14?: number;
    costPerMonthForInsurance_15?: number;
    costPerMonthForInsurance_16?: number;
    costPerMonthForInsurance_17?: number;
    costPerMonthForInsurance_18?: number;
  };
  example?: {
    input?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    output?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  };
  costCalculationDescription?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Link = {
  _type: "link";
  text?: string;
  type: string;
  internalLink?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "none";
  };
  url?: string;
  email?: string;
  phone?: string;
  value?: string;
  blank?: boolean;
  parameters?: string;
  anchor?: string;
};

export type None = {
  _id: string;
  _type: "none";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  isNone: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Slug | Contact | Customer | CostCalculation | PageSectionsPrivacy | PageSectionsFaq | Question | PageSectionsAbout | PersonalFeature | PageSectionsServiceModules | PageSectionsServiceFeatures | PageSectionsServiceSegments | PageSectionsStart | ServiceFeature | ServiceSegment | ServiceModule | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Link | None;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../dinoplan-frontend/app/page.tsx
// Variable: PAGE_SECTION_START_QUERY
// Query: *[_type == "pageSectionsStart"][0] {    _id,     title,     subTitle,    illustration {      'height': asset->metadata.dimensions.height,      'width': asset->metadata.dimensions.width,      asset->{        url,      }    },}
export type PAGE_SECTION_START_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  subTitle: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  illustration: {
    height: number | null;
    width: number | null;
    asset: {
      url: string | null;
    } | null;
  };
} | null;
// Variable: PAGE_SECTION_SERVICE_SEGMENTS_QUERY
// Query: *[_type == "pageSectionsServiceSegments"][0] {    _id,    title,    description,    serviceSegments[] {        serviceSegment-> {           _id,           name,           listName,           dinoPrefix,           illustration {             'height': asset->metadata.dimensions.height,             'width': asset->metadata.dimensions.width,             asset->{               url,             }           },           dinoSubtitle,           description,           serviceModules[] {              serviceModule-> {                _id,                name,              }           }        }    }}
export type PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceSegments: Array<{
    serviceSegment: {
      _id: string;
      name: string | null;
      listName: string | null;
      dinoPrefix: string | null;
      illustration: {
        height: number | null;
        width: number | null;
        asset: {
          url: string | null;
        } | null;
      } | null;
      dinoSubtitle: string | null;
      description: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }> | null;
      serviceModules: Array<{
        serviceModule: {
          _id: string;
          name: string | null;
        } | null;
      }> | null;
    } | null;
  }> | null;
} | null;
// Variable: PAGE_SECTION_SERVICE_FEATURES_QUERY
// Query: *[_type == "pageSectionsServiceFeatures"][0] {    _id,     title,     description,     serviceFeatures[] {        serviceFeature-> {           _id,           name,           illustration {              'height': asset->metadata.dimensions.height,              'width': asset->metadata.dimensions.width,              asset->{                url,              }           },        }    }}
export type PAGE_SECTION_SERVICE_FEATURES_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceFeatures: Array<{
    serviceFeature: {
      _id: string;
      name: string;
      illustration: {
        height: number | null;
        width: number | null;
        asset: {
          url: string | null;
        } | null;
      };
    } | null;
  }> | null;
} | null;
// Variable: PAGE_SECTION_SERVICE_MODULES_QUERY
// Query: *[_type == "pageSectionsServiceModules"][0] {    _id,     title,     serviceModules[] {        serviceModule-> {           _id,           name,           example,           costCalculationDescription,           serviceSegment-> {              _id,              illustration {                'height': asset->metadata.dimensions.height,                'width': asset->metadata.dimensions.width,                asset->{                  url,                }              },           }        }    }}
export type PAGE_SECTION_SERVICE_MODULES_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  serviceModules: Array<{
    serviceModule: {
      _id: string;
      name: string | null;
      example: {
        input?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }>;
        output?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }>;
      } | null;
      costCalculationDescription: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }> | null;
      serviceSegment: {
        _id: string;
        illustration: {
          height: number | null;
          width: number | null;
          asset: {
            url: string | null;
          } | null;
        } | null;
      };
    } | null;
  }> | null;
} | null;
// Variable: PAGE_SECTION_ABOUT_QUERY
// Query: *[_type == "pageSectionsAbout"][0] {    _id,     title,     description,    personalFeatures[] {        personalFeature-> {           _id,           name,           description,        }    },    illustration {      'height': asset->metadata.dimensions.height,      'width': asset->metadata.dimensions.width,      asset->{        url,      }    },}
export type PAGE_SECTION_ABOUT_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  personalFeatures: Array<{
    personalFeature: {
      _id: string;
      name: string;
      description: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }>;
    } | null;
  }> | null;
  illustration: {
    height: number | null;
    width: number | null;
    asset: {
      url: string | null;
    } | null;
  };
} | null;
// Variable: PAGE_SECTION_FAQ_QUERY
// Query: *[_type == "pageSectionsFaq"][0] {    _id,     title,     subTitle,    questions[] {        question-> {           _id,           question,           answer,        }    },    illustration {      'height': asset->metadata.dimensions.height,      'width': asset->metadata.dimensions.width,      asset->{        url,      }    },}
export type PAGE_SECTION_FAQ_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  subTitle: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  questions: Array<{
    question: {
      _id: string;
      question: string;
      answer: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }>;
    } | null;
  }> | null;
  illustration: {
    height: number | null;
    width: number | null;
    asset: {
      url: string | null;
    } | null;
  };
} | null;

// Source: ../dinoplan-frontend/app/datenschutz/page.tsx
// Variable: PRIVACY_QUERY
// Query: *[_type == "pageSectionsPrivacy"][0] {    _id,    title,    text,}
export type PRIVACY_QUERYResult = {
  _id: string;
  title: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
} | null;

// Source: ../dinoplan-frontend/app/lib/sanity/queries/contact.ts
// Variable: CONTACT_QUERY
// Query: *[_type == "contact"][0] {    _id,     email,    calendly,}
export type CONTACT_QUERYResult = {
  _id: string;
  email: Link | null;
  calendly: Link | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"pageSectionsStart\"][0] {\n    _id, \n    title, \n    subTitle,\n    illustration {\n      'height': asset->metadata.dimensions.height,\n      'width': asset->metadata.dimensions.width,\n      asset->{\n        url,\n      }\n    },\n}": PAGE_SECTION_START_QUERYResult;
    "*[_type == \"pageSectionsServiceSegments\"][0] {\n    _id,\n    title,\n    description,\n    serviceSegments[] {\n        serviceSegment-> {\n           _id,\n           name,\n           listName,\n           dinoPrefix,\n           illustration {\n             'height': asset->metadata.dimensions.height,\n             'width': asset->metadata.dimensions.width,\n             asset->{\n               url,\n             }\n           },\n           dinoSubtitle,\n           description,\n           serviceModules[] {\n              serviceModule-> {\n                _id,\n                name,\n              }\n           }\n        }\n    }\n}": PAGE_SECTION_SERVICE_SEGMENTS_QUERYResult;
    "*[_type == \"pageSectionsServiceFeatures\"][0] {\n    _id, \n    title, \n    description, \n    serviceFeatures[] {\n        serviceFeature-> {\n           _id,\n           name,\n           illustration {\n              'height': asset->metadata.dimensions.height,\n              'width': asset->metadata.dimensions.width,\n              asset->{\n                url,\n              }\n           },\n        }\n    }\n}": PAGE_SECTION_SERVICE_FEATURES_QUERYResult;
    "*[_type == \"pageSectionsServiceModules\"][0] {\n    _id, \n    title, \n    serviceModules[] {\n        serviceModule-> {\n           _id,\n           name,\n           example,\n           costCalculationDescription,\n           serviceSegment-> {\n              _id,\n              illustration {\n                'height': asset->metadata.dimensions.height,\n                'width': asset->metadata.dimensions.width,\n                asset->{\n                  url,\n                }\n              },\n           }\n        }\n    }\n}": PAGE_SECTION_SERVICE_MODULES_QUERYResult;
    "*[_type == \"pageSectionsAbout\"][0] {\n    _id, \n    title, \n    description,\n    personalFeatures[] {\n        personalFeature-> {\n           _id,\n           name,\n           description,\n        }\n    },\n    illustration {\n      'height': asset->metadata.dimensions.height,\n      'width': asset->metadata.dimensions.width,\n      asset->{\n        url,\n      }\n    },\n}": PAGE_SECTION_ABOUT_QUERYResult;
    "*[_type == \"pageSectionsFaq\"][0] {\n    _id, \n    title, \n    subTitle,\n    questions[] {\n        question-> {\n           _id,\n           question,\n           answer,\n        }\n    },\n    illustration {\n      'height': asset->metadata.dimensions.height,\n      'width': asset->metadata.dimensions.width,\n      asset->{\n        url,\n      }\n    },\n}": PAGE_SECTION_FAQ_QUERYResult;
    "*[_type == \"pageSectionsPrivacy\"][0] {\n    _id,\n    title,\n    text,\n}": PRIVACY_QUERYResult;
    "*[_type == \"contact\"][0] {\n    _id, \n    email,\n    calendly,\n}": CONTACT_QUERYResult;
  }
}
