const {getBaseConfig} = require("../../config/webpack/webpack.base");
const path = require("path");

module.exports = {
    ...getBaseConfig(path.resolve(__dirname))
}