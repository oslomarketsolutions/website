const getLanguage = pathname => {
  const parsedPath = /^\/(\w\w)/.exec(pathname);
  return parsedPath && parsedPath[1];
};

export default getLanguage;
