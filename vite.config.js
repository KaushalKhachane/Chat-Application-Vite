// vite.config.js

export default {
  server: {
    proxy: {
      '/api': 'https://cloud.appwrite.io/v1', // Replace with your Appwrite API URL
    },
  },
};
