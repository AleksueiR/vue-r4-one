module.exports = {
    /* configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }, */
    chainWebpack: config => {
        // remove the prefetch plugin: stops downloading split code chunks until they are needed
        config.plugins.delete('prefetch');
    }
};
