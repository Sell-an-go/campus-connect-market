import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

export const imageUpload = async (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        transformation: [
          { quality: 'auto', fetch_format: 'auto' },
          { width: 1200, height: 1200, crop: 'fill', gravity: 'auto' }
        ],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); //  Direct Cloudinary image URL
      }
    );

    // Convert buffer to readable stream
    Readable.from(buffer).pipe(uploadStream);
  });
};


