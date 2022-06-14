const path = require('path');
const PATH_SRC = path.resolve(`${__dirname}/app`);

module.exports = {
    webpack: {
        alias: {
            '@components': `${PATH_SRC}/components`,
            '@types': `${PATH_SRC}/types`,
            '@assets': `${PATH_SRC}/assets`,
            '@store': `${PATH_SRC}/store`,
            '@hooks': `${PATH_SRC}/hooks`,
            '@data': `${PATH_SRC}/data`,
            '@utils': `${PATH_SRC}/utils`,
            '@UI': `${PATH_SRC}/UI`,
        },
    },
};