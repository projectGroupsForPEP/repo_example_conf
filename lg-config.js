module.exports = {
    projectElement: 'single',
    useEslint: false,
    dev: {
        devServer_config: {
            contentBase: './dist',
            port: 9000,
            compress: true,
            hot: true,
            open: 'Google Chrome',
            publicPath: '/a/b/',
            openPage: 'a/b/'
        },
        useMock: true,
        path: '/a/b/',
        // assets path
        publicPath: '/a/b/'
    },
    prod: {
        path: '/a/b/',
        publicPath: '/a/b/'
    }
}