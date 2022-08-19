const axios = require("axios").default
const rexarTools = require("rexar-tools")
const EventEmitter = require("node:events")
const colorette = require("colorette")
const versionControl = require("./Utils/versionControl.js")



class turkceSozlukApi extends EventEmitter{
    constructor(){
        super()
        versionControl(colorette.red("=> ") + colorette.blue("Modülü sürümü eski güncellemek için terminale: npm i turkce-sozluk-api@latest yazın."))
    }
    /**
     * 
     * @param {string} kelime
     * @return {import("./Types/Returns").KelimeAnlamCekmeReturns}
     */
    async KelimeAnlamCekme(kelime){
        try {
        const response = await axios.request({
            url: "https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime)
        })
        const body = response.data[0]
        const kelime_bulundumu = response.data.error ? false : true
        return kelime_bulundumu === false ? {
            kelime_bulundumu
        } : {
            kelime,
            anlam: body?.anlamlarListe[0]?.anlam,
            ikinci_anlam: body?.anlamlarListe[1]?.anlam,
            ucuncu_anlam: body?.anlamlarListe[2]?.anlam,
            dorduncu_anlam: body?.anlamlarListe[3]?.anlam,
            besinci_anlam: body?.anlamlarListe[4]?.anlam,
            ozel_mi: rexarTools.booleanify(rexarTools.numberify(body.ozel_mi)),
            cogul_mu: rexarTools.booleanify(rexarTools.numberify(body.cogul_mu)),
            ornek: body?.anlamlarListe[0]?.orneklerListe ? body?.anlamlarListe[0]?.orneklerListe[0] !== undefined ? body?.anlamlarListe[0]?.orneklerListe[0].ornek : undefined : undefined,
            ikinci_ornek: body?.anlamlarListe[1]?.orneklerListe ? body?.anlamlarListe[1]?.orneklerListe[0] !== undefined ? body?.anlamlarListe[1]?.orneklerListe[0].ornek : undefined : undefined,
            birlesikler: body?.birlesikler ? body.birlesikler : undefined,
            atasozu_deyim: body?.atasozu ? body?.atasozu[0].madde : undefined,
            kelime_bulundumu
        }
      } catch(error){
            this.emit("apiHata", error)
      }
    }
    /**
     * 
     * @param {string} inputSoz
     * @return {import("./Types/Returns").AtasozuDeyimAnlamCekmeReturns}
     */
    async AtasozuDeyimAnlamCekme(inputSoz){
        try {
        const response = await axios.request({
            url: "https://sozluk.gov.tr/atasozu?ara=" + encodeURI(inputSoz)
        })
        const body = response.data[0]
        const soz_bulundumu = response.data.error ? false : true
        return {
            soz: body?.sozum,
            anlam: body?.anlami,
            anahtar_kelimeler: body?.anahtar,
            atasozu_mu_deyim_mi: body?.turu2,
            soz_bulundumu
        }
      } catch(error){
        this.emit("apiHata", error)
      }
    }
    /**
     * 
     * @param {string} kelime
     * @return {Promise<boolean>}
     */
    async KelimeKontrol(kelime){
        const response = await axios.request({
            url: "https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime)
        })
        const body = response.data
        return body.error ? false : true
    }
    /**
     * 
     * @param {string} atasozu
     * @return {Promise<boolean>}
     */
    async AtasozuDeyimKontrol(atasozu){
        const response = await axios.request({
            url: "https://sozluk.gov.tr/atasozu?ara=" + encodeURI(atasozu)
        })
        const body = response.data[0]
        return body.error ? false : true
    }
}



module.exports = new turkceSozlukApi()
