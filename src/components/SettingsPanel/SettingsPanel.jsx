import React, { useState, useEffect } from 'react';
import { getUiSettings, saveUiSettings } from '../../utils/settings';
import './SettingsPanel.css';

function SettingsPanel({ isOpen, onClose }) {
  const [fontFamily, setFontFamily] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [themeColor, setThemeColor] = useState('');

  useEffect(() => {
    const currentSettings = getUiSettings();
    setFontFamily(currentSettings.fontFamily);
    setBackgroundImage(currentSettings.backgroundImage || ''); // Ensure empty string if null
    setThemeColor(currentSettings.themeColor);
  }, []);

  const handleSave = () => {
    saveUiSettings({ fontFamily, backgroundImage, themeColor });
    // Ideally, trigger a refresh or global state update here
    // For now, just saving and closing
    onClose();
  };

  const handleClearBackground = () => {
    setBackgroundImage('');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="settings-backdrop">
      <div className="settings-panel">
        <h2>UI Settings</h2>

        <div className="settings-section">
          <label htmlFor="font-family-select">Select Font Family:</label>
          <select
            id="font-family-select"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            {/* Placeholder options - will be populated later */}
            <option value="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">System Default</option>
            <option value="Arial, Helvetica, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="'Times New Roman', Times, serif">Times New Roman</option>
            <option value="'Courier New', Courier, monospace">Courier New</option>
          </select>
          <p>Current: {fontFamily}</p>
        </div>

        <div className="settings-section">
          <label htmlFor="background-image-url">Custom Background Image URL:</label>
          <input
            type="text"
            id="background-image-url"
            value={backgroundImage}
            onChange={(e) => setBackgroundImage(e.target.value)}
            placeholder="Enter image URL"
          />
          {backgroundImage && <p>Current: {backgroundImage}</p>}
          <button onClick={handleClearBackground} className="settings-button-clear">
            Clear Background
          </button>
        </div>

        <div className="settings-section">
          <label htmlFor="theme-color-picker">Select Accent Color:</label>
          <input
            type="color"
            id="theme-color-picker"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
          <p>Current: {themeColor}</p>
        </div>

        <div className="settings-actions">
          <button onClick={handleSave} className="settings-button-save">
            Save Settings
          </button>
          <button onClick={onClose} className="settings-button-close">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
