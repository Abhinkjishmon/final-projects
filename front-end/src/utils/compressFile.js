import imageCompression from "browser-image-compression";

export const handleCompressAndAppendImages = async (imagesArray, formData) => {
  try {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    for (let index = 0; index < imagesArray.length; index++) {
      console.log(imagesArray[index]);
      const compressedImage = await imageCompression(
        options
      );
      formData.append("images", compressedImage);
    }

    console.log("All images compressed and appended to FormData.");
  } catch (error) {
    console.error("Error compressing images:", error);
  }
};
