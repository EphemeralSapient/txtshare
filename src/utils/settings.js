/**
 * @file Utility functions for managing settings using localStorage.
 */

/**
 * Saves a key-value pair to localStorage.
 *
 * @param {string} key The key to save.
 * @param {any} value The value to save.
 */
export function saveSetting(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving setting "${key}":`, error);
  }
}

/**
 * Retrieves a value by key from localStorage.
 *
 * @param {string} key The key to retrieve.
 * @returns {any | null} The retrieved value, or null if not found or an error occurs.
 */
export function getSetting(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error getting setting "${key}":`, error);
    return null;
  }
}

/**
 * Removes a key from localStorage.
 *
 * @param {string} key The key to remove.
 */
export function removeSetting(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing setting "${key}":`, error);
  }
}

/**
 * Retrieves an object containing all UI settings: fontFamily, backgroundImage, themeColor.
 * For each setting, if it's not found in localStorage, it returns a default value.
 *
 * @returns {{fontFamily: string, backgroundImage: string | null, themeColor: string}} The UI settings.
 */
export function getUiSettings() {
  const defaults = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    backgroundImage: null,
    themeColor: '#66fcf2',
  };

  return {
    fontFamily: getSetting('fontFamily') || defaults.fontFamily,
    backgroundImage: getSetting('backgroundImage') || defaults.backgroundImage,
    themeColor: getSetting('themeColor') || defaults.themeColor,
  };
}

/**
 * Saves UI settings to localStorage.
 * Takes an object with fontFamily, backgroundImage, and/or themeColor properties.
 * Saves each provided setting to localStorage.
 *
 * @param {{fontFamily?: string, backgroundImage?: string | null, themeColor?: string}} settings The UI settings to save.
 */
export function saveUiSettings(settings) {
  if (settings.fontFamily !== undefined) {
    saveSetting('fontFamily', settings.fontFamily);
  }
  if (settings.backgroundImage !== undefined) {
    saveSetting('backgroundImage', settings.backgroundImage);
  }
  if (settings.themeColor !== undefined) {
    saveSetting('themeColor', settings.themeColor);
  }
}
