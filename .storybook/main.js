const path = require("path");
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  babel: async options => ({
    // Update your babel configuration here
    ...options
  }),
  webpackFinal: async (config, {
    configType
  }) => {
    // Make whatever fine-grained changes you need
    config?.module?.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../")
    });

    // Return the altered config
    return config;
  }
};
export default config;