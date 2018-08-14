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

export const setCookie = (cookieName, cookieValue, expirationDays) => {
  const d = new Date();
  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
};

export const getCookie = cookieName => {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
