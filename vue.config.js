module.exports = {
    /* configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }, */
    chainWebpack: config => {
        // remove the prefetch plugin
        config.plugins.delete('prefetch');
    }
};
