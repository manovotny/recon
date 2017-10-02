module.exports = {
    exportPathMap() {
        const page = '/search';

        return {
            [page]: {page}
        };
    },
    webpack(config) {
        // eslint-disable-next-line no-param-reassign
        config.target = 'electron-renderer';

        return config;
    }
};
