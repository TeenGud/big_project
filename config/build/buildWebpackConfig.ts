import webpack from 'webpack'
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, port, isDev} = options;
    return (
        {
            mode,
            entry: paths.entry,
            output: {
                filename: '[name].[contenthash].js',
                path: paths.build,
                clean: true,
            },
            devtool: isDev ? 'inline-source-map' : undefined,
            plugins: buildPlugins(options),
            module: {
                rules: buildLoaders(options),
              },
              resolve: buildResolvers(options),
          devServer: isDev ? buildDevServer(options) : undefined
          }
    )
}