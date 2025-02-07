const { withNativeWind } = require("nativewind/metro");

// This replaces `const { getDefaultConfig } = require('expo/metro-config');`
const { getDefaultConfig } = require("expo/metro-config");

// This replaces `const config = getSentryExpoConfig(__dirname);`
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
