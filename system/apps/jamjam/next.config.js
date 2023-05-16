//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const { withNx } = require('@nrwl/next/plugins/with-nx');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyFonts = (/** @type {{ plugins: CopyWebpackPlugin[]; }} */ config) => {
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
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    // Important: return the modified config

    copyFonts(config);

    return config;
  },
};

module.exports = withNx(nextConfig);
