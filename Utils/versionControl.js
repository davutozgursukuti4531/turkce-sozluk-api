const rexarTools = require("rexar-tools")

/**
 * @param {string} warmMessage
 */
const versionControl = async(warmMessage) => {

const moduleVersion = await rexarTools.npm("turkce-sozluk-api").version
    if(require(`../package.json`).version !== moduleVersion){
        console.log(warmMessage)
    } else return;
}

module.exports = versionControl
