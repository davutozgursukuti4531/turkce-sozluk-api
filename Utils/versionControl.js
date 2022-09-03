const rexarTools = require("rexar-tools").default


/**
 * 
 * @param {string} warmMessage 
 * @returns {Promise<void>}
 */
const versionControl = async(warmMessage) => {

const thisModule = await rexarTools.npm("turkce-sozluk-api")
    if(require(`../package.json`).version !== thisModule.version){
        console.log(warmMessage)
    } else return;
}

module.exports = versionControl
