export const findImageSize = (image, imageSizes) => {
  if (image === null || imageSizes === null) return false;

  // If image is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageSizes.find(
    imageSize => imageSize.node.relativePath === imageName,
  );
  return element.node.childImageSharp.sizes;
};

export const findImageResolution = (image, imageResolutions) => {
  if (image === null || imageResolutions === null) return false;

  // If `image` is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageResolutions.find(
    imageResolution => imageResolution.node.relativePath === imageName,
  );
  return element.node.childImageSharp.resolutions;
};

export default null;
