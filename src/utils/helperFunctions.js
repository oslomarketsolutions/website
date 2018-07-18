export const findImageSizes = (image, imageSizes) => {
  if (typeof image !== 'string' || !imageSizes) return null;

  // If image is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageSizes.find(
    imageSizesObject => imageSizesObject.node.relativePath === imageName,
  );

  return element ? element.node.childImageSharp.sizes : null;
};

export const findImageResolutions = (image, imageResolutions) => {
  if (typeof image !== 'string' || !imageResolutions) return null;

  // If `image` is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageResolutions.find(
    imageResolutionsObject =>
      imageResolutionsObject.node.relativePath === imageName,
  );

  return element ? element.node.childImageSharp.resolutions : null;
};
