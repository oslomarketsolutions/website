import Cookies from 'js-cookie';

export const getParsedCookie = name => {
  if (typeof window === 'undefined') return null;
  return Cookies.getJSON(name);
};
export const setCookie = (name, value, expirationDays) => {
  if (typeof window === 'undefined') return false;
  return Cookies.set(name, value, { expires: expirationDays });
};
export const removeCookie = (name, domain) => {
  if (typeof window === 'undefined') return false;
  return domain ? Cookies.remove(name, { domain }) : Cookies.remove(name);
};
