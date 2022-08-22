export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const sanitizeString = (str) => {
   str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '');
   return str.trim();
};
