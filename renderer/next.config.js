module.exports = {
    exportPathMap: () => {
        const page = '/search';

        return {
            [page]: {page}
        };
    },
    /* eslint-disable no-param-reassign */
    webpack: (config) => {
        config.target = 'electron-renderer';

        config.plugins = config.plugins.filter((plugin) =>
            plugin.constructor.name !== 'UglifyJsPlugin'
        );

        return config;
    }
    /* eslint-enable */
};
