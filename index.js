const axios = require("axios").default
const rexarTools = require("rexar-tools")



class Sozluk{
    /**
     * 
     * @param {string} kelime
     * @return {import("./Types/Returns").KelimeAnlamCekmeReturns}
     */
    async KelimeAnlamCekme(kelime){
        const response = await axios.request({
            url: "https://sozluk.gov.tr/gts?ara=" + kelime
        })
        const body = response.data[0]
        return {
            kelime,
            anlam: body?.anlamlarListe[0]?.anlam,
            ikinci_anlam: body?.anlamlarListe[1]?.anlam,
            ucuncu_anlam: body?.anlamlarListe[2]?.anlam,
            dorduncu_anlam: body?.anlamlarListe[3]?.anlam,
            besinci_anlam: body?.anlamlarListe[4]?.anlam,
            ozel_mi: rexarTools.booleanify(rexarTools.numberify(body.ozel_mi)),
            cogul_mu: rexarTools.booleanify(rexarTools.numberify(body.cogul_mu)),
            birlesikler: body.birlesikler
        }
    }
    /**
     * 
     * @param {string} inputSoz
     * @return {import("./Types/Returns").AtasozuDeyimAnlamCekmeReturns}
     */
    async AtasozuDeyimAnlamCekme(inputSoz){
        const response = await axios.request({
            url: "https://sozluk.gov.tr/atasozu?ara=" + encodeURI(inputSoz)
        })
        const body = response.data[0]
        return {
            soz: body?.sozum,
            anlam: body?.anlami,
            anahtar_kelimeler: body?.anahtar,
            atasozu_mu_deyim_mi: body?.turu2
        }
    }
}



module.exports = new Sozluk()