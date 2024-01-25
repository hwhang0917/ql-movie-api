module.exports = {
  apps: [
    {
      name: 'ql-movie-api',
      script: 'dist/main.js',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
