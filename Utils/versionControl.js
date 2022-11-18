import rexarTools from"rexar-tools"



const versionControl = async(warnMessage: string): Promise<void> => {

const thisModule = await rexarTools.npm("turkce-sozluk-api")
    if(require(`../package.json`).version !== thisModule.version){
        console.log(warnMessage)
    } else return;
}

export default versionControl
