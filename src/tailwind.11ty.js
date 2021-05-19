const _ = require('lodash');

module.exports = class {
    data() {
        return {
            permalink: '../tailwind.config.js',
        }
    }

    render(data) {
        return `module.exports = ${JSON.stringify({theme: {extend: {colors: _.mapValues(data.colors, 'hex')}}}, null, 4)};`;
    }
};
