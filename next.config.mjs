/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // a rule for handling MP3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/sounds',
          publicPath: '_next/static/sounds',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
