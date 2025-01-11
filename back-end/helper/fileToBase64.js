const convertToBase64 = (fileBuffer, mimeType) => {
  if (!fileBuffer || !mimeType) {
    throw new Error("Invalid file buffer or MIME type");
  }
  return `data:${mimeType};base64,${fileBuffer.toString("base64")}`;
};

module.exports = convertToBase64;
