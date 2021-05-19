const convert = require('color-convert');

const rgb = (hex) => {
    let [r, g, b] = convert.hex.rgb(hex);
    return {r, g, b};
};

const cmyk = (hex) => {
    let [c, m, y, k] = convert.hex.cmyk(hex);
    return {c, m, y, k};
};

module.exports = function () {
    return {
        astrotomic: {
            pantone: '2088 C',
            hex: '#825dc7',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
        moonlight: {
            pantone: '2768 C',
            hex: '#071d49',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
        night: {
            pantone: '296 C',
            hex: '#051c2c',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
        mit: {
            pantone: '2125 C',
            hex: '#5461c8',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
        treeware: {
            pantone: '7740 C',
            hex: '#3a913f',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
        larabelles: {
            pantone: '2339 C',
            hex: '#f09491',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
        sponsors: {
            pantone: '1365 C',
            hex: '#ffb549',
            rgb() {
                return rgb(this.hex);
            },
            cmyk() {
                return cmyk(this.hex);
            },
        },
    };
};