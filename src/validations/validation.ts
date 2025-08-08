export const validateRequired = (value: string): boolean => {
  return value !== null && value !== undefined && value.trim().length > 0;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateMinLength = (
  value: string,
  minLength: number
): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (
  value: string,
  maxLength: number
): boolean => {
  return value.trim().length <= maxLength;
};
