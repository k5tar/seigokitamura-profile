const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    basePath: isProd ? '/seigokitamura-profile' : '',
    assetPrefix: isProd ? '/seigokitamura-profile/' : '',
};