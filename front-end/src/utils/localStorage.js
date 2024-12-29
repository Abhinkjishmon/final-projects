// utils/localStorageUtils.js
export const setLocalStorageItem = (key, value) => {
  if (typeof value === "object") {
    value = JSON.stringify(value); // Convert objects to JSON strings
  }
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key) => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value); // Try to parse JSON strings
  } catch {
    return value; // Return raw value if it's not JSON
  }
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
