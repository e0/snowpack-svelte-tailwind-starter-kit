module.exports = {
  mount: {
    // directory name: 'build directory'
   public: '/',
   src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-svelte'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
