module.exports = {
    webpack(config) {
        config.target = 'electron-renderer'
        return config
    },
    exportPathMap() {
        const page = '/search';

        return {
            [page]: {page}
        }
    }
}
