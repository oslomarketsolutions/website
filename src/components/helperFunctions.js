export const findImageSizes = (image, imageSizes) => {
  if (image == null || imageSizes == null) return {};

  // If image is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageSizes.find(
    imageSizesObject => imageSizesObject.node.relativePath === imageName,
  );

  return element ? element.node.childImageSharp.sizes : {};
};

export const findImageResolutions = (image, imageResolutions) => {
  if (image === null || imageResolutions === null) return {};

  // If `image` is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageResolutions.find(
    imageResolutionsObject =>
      imageResolutionsObject.node.relativePath === imageName,
  );

  return element ? element.node.childImageSharp.resolutions : {};
};

export default null;
