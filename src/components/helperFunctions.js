export const findImageSize = (image, imageSizes) => {
  // If not both image and imageSizes are true then return empty object
  if (!image || !imageSizes) return null;

  // If image is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageSizes.find(
    imageSize => imageSize.node.relativePath === imageName,
  );

  return element ? element.node.childImageSharp.sizes : null;
};

export const findImageResolution = (image, imageResolutions) => {
  // If not both image and imageResolutions are true then return empty object
  if (!image || !imageResolutions) return null;

  // If `image` is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageResolutions.find(
    imageResolution => imageResolution.node.relativePath === imageName,
  );

  return element ? element.node.childImageSharp.resolutions : null;
};

export default null;
