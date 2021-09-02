module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me", "assets.vercel.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    return config;
  },
  env: {
    test: {
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            ssr: false,
            displayName: false,
          },
        ],
      ],
    },
  },
};
