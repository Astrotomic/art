module.exports = eleventyConfig => {
    eleventyConfig.addDataExtension('yml', contents => require('js-yaml').safeLoad(contents));

    return {
        dir: {
            includes: '_includes',
            layouts: '_layouts',
            data: '_data',
            input: 'src',
            output: 'dist',
        }
    };
};