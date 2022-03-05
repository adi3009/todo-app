/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: "/",
    src: "/src",
  },
  plugins: ["@snowpack/plugin-postcss", "@snowpack/plugin-react-refresh"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    /* ... */
  },
};
