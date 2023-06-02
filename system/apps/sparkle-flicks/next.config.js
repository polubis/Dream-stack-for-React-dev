//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const copyFonts = (config) => {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../../assets/fonts'),
          to: path.join(__dirname, 'public/fonts'),
        },
      ],
    })
  );
};

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config) => {
    copyFonts(config);

    return config;
  },
};

module.exports = withNx(nextConfig);
