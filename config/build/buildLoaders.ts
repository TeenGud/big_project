import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const babelLoader = {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env']
          ],
          "plugins": [
            ["i18next-extract", {"nsSeparator": "~", locales: ['ru', 'en'], keyAsDefaultValue: true}, ],
  ]
        }
      }
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
                modules: {
                  auto: (resPath: string) => resPath.includes('.module.'),
                  localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                },
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }
    const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }
    return (
        [
            svgLoader,
            fileLoader,
            babelLoader,
            typescriptLoaders,
            cssLoader,
        ]
    )
}