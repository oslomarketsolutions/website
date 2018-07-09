export const findImageSize = (image, imageSizes) => {
  // If image is a path, get only the image name
  if (image === null ) return false;
  const imageName = image.split('/').pop();

  const element = imageSizes.find(
    imageSize => imageSize.node.relativePath === imageName,
  );
  return element.node.childImageSharp.sizes;
};

export const findImageResolution = (image, imageResolutions) => {
  // If image is a path, get only the image name
  const imageName = image.split('/').pop();

  const element = imageResolutions.find(
    imageResolution => imageResolution.node.relativePath === imageName,
  );
  return element.node.childImageSharp.resolutions;
};

export default null;
