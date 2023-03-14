const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 5000,
    proxy: {
      '^/api': {
        target: 'https://task-tracker-vue-theta.vercel.app',
        changeOrigin: true,
        loglevel: 'debug',
        pathRewrite: { '^/api': '/' }
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          include: /src/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.sass$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                indentedSyntax: true,
                // sass-loader version >= 8
                sassOptions: {
                  indentedSyntax: true
                }
              }
            }
          ]
        }
      ]
    }
  }
};