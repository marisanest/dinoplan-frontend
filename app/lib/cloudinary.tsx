import { Cloudinary } from '@cloudinary/url-gen';

export const cloudinaryCloudConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
};

export const cloudinary = new Cloudinary({ cloud: cloudinaryCloudConfig });
