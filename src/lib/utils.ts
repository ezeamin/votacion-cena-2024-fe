import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

/**
 * Usage with template literals. To call the function, do not use parentheses.
 * @param strings -
 * @param values -
 * @returns string
 */
export const removeLineBreaks = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => {
  let result = '';

  for (let i = 0; i < strings.length; i += 1) {
    result += strings[i];
    if (i < values.length) {
      result += String(values[i]);
    }
  }

  // Remove line breaks and extra spaces
  result = result.replace(/\s+/g, ' ');

  return result;
};

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const R = 6371; // Earth's radius in kilometers

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};
