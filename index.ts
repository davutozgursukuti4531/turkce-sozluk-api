import axios from"axios"
import rexarTools from"rexar-tools"
import EventEmitter from"node:events"
import colorette from"colorette"
import versionControl from"./Utils/versionControl"
import TypedEventEmitter from "typed-emitter"
import { Events } from "./Types/Returns.ts"


class turkceSozlukApi extends (EventEmitter as new() => TypedEventEmitter<Events>){
    constructor(){
        super()
        versionControl(colorette.red("=> ") + colorette.blue("Modülü sürümü eski güncellemek için terminale: npm i turkce-sozluk-api@latest yazın."))
    }
    /**
     * 
     * @param {string} kelime
     * @return {import("./Types/Returns").KelimeAnlamCekmeReturns}
     */
    async KelimeAnlamCekme(kelime: string){
        try {
        const response = await axios.request({
            url: "https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime)
        })
        const body = response.data[0]
        const yazimBody = await this.KelimeYazimCekme(body.madde)
        const kelime_bulundumu = response.data.error ? false : true
        const result = {
            kelime: body?.madde,
            id: body?.madde_id,
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
            atasozu_deyim: body?.atasozu ? body?.atasozu[0]?.madde : undefined,
            ikinci_atasozu_deyim: body?.atasozu ? body?.atasozu[1]?.madde : undefined,
            ucuncu_atasozu_deyim: body?.atasozu ? body?.atasozu[2]?.madde : undefined,
            dorduncu_atasozu_deyim: body?.atasozu ? body?.atasozu[3]?.madde : undefined,
            ses_kodu: yazimBody?.ses_kodu,
            kelime_bulundumu
        }
        return result
      } catch(error){
            this.emit("kelimeApiHata", error)
            return {
                kelime: undefined,
                id: undefined,
                anlam: undefined,
                ikinci_anlam: undefined,
                ucuncu_anlam: undefined,
                dorduncu_anlam: undefined,
                besinci_anlam: undefined,
                ozel_mi: undefined,
                cogul_mu: undefined,
                ornek: undefined,
                ikinci_ornek: undefined,
                birlesikler: undefined,
                atasozu_deyim: undefined,
                kelime_bulundumu: false
            }
      }
    }
    /**
     * 
     * @param {string} inputSoz
     * @return {import("./Types/Returns").AtasozuDeyimAnlamCekmeReturns}
     */
    async AtasozuDeyimAnlamCekme(inputSoz: string){
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
        this.emit("atasozuDeyimApiHata", error)
      }
    }
    /**
     * 
     * @param {string} kelime
     * @return {Promise<boolean>}
     */
    async KelimeKontrol(kelime: string){
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
    async AtasozuDeyimKontrol(atasozu: string){
        const response = await axios.request({
            url: "https://sozluk.gov.tr/atasozu?ara=" + encodeURI(atasozu)
        })
        const body = response.data
        return body.error ? false : true
    }
    async IsimAnlamCekme(cinsiyet, isim){
        try {
        if(cinsiyet !== "erkek"){
            if(cinsiyet !== "kiz"){
                throw new TypeError("Cinsiyet belirtimi hatalı lütfen: kiz/erkek yazın.")
            }
        }
        const cinsiyetNumber = cinsiyet === "erkek" ? 2 : 1;
        const response = await axios.request({
            url: `https://sozluk.gov.tr/adlar?cins=${encodeURI(cinsiyetNumber)}&ara=${encodeURI(isim)}`
        })
        const body = response.data[0]
        const isim_bulundumu = response.data.error ? false : true
        var result = {
            ad: body?.ad,
            id: body?.ad_id,
            anlam: body?.anlam,
            cinsiyeti: rexarTools.numberify(body?.cins) === 2 ? "Erkek" : "Kız",
            isim_bulundumu
        }
        return result
        } catch(error){
        this.emit("atasozuDeyimApiHata", error)
        return {
            ad: undefined,
            id: undefined,
            anlam: undefined,
            cinsiyeti: undefined,
            isim_bulundumu
        }
        }
    }
    async IsimKontrol(cinsiyet: "kiz" | "erkek", isim: string){
        if(cinsiyet !== "erkek"){
            if(cinsiyet !== "kiz"){
                throw new TypeError("Cinsiyet belirtimi hatalı lütfen: kiz/erkek yazın.")
            }
        }
        const cinsiyetNumber = cinsiyet === "erkek" ? 2 : 1;
        const response = await axios.request({
            url: `https://sozluk.gov.tr/adlar?cins=${encodeURI(cinsiyetNumber)}&ara=${encodeURI(isim)}`
        })
        if(response.data.error){
            return false
        } else true
    }
    async IdIleKelimeAnlamCekme(id){
        try {
        const response = await axios.request({
            url: "https://sozluk.gov.tr/gts_id?id=" + encodeURI(id)
        })
        const body = response.data[0]
        const yazimBody = await this.KelimeYazimCekme(body?.madde)
        const kelime_bulundumu = response.data.error ? false : true
        const result = {
            kelime: body?.madde,
            id: body?.madde_id,
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
            atasozu_deyim: body?.atasozu ? body?.atasozu[0]?.madde : undefined,
            ikinci_atasozu_deyim: body?.atasozu ? body?.atasozu[1]?.madde : undefined,
            ucuncu_atasozu_deyim: body?.atasozu ? body?.atasozu[2]?.madde : undefined,
            dorduncu_atasozu_deyim: body?.atasozu ? body?.atasozu[3]?.madde : undefined,
            ses_kodu: yazimBody?.ses_kodu,
            kelime_bulundumu
        }
        return result
      } catch(error){
            this.emit("idIleKelimeApiHata", error)
            return {
                kelime: undefined,
                id: undefined,
                anlam: undefined,
                ikinci_anlam: undefined,
                ucuncu_anlam: undefined,
                dorduncu_anlam: undefined,
                besinci_anlam: undefined,
                ozel_mi: undefined,
                cogul_mu: undefined,
                ornek: undefined,
                ikinci_ornek: undefined,
                birlesikler: undefined,
                atasozu_deyim: undefined,
                kelime_bulundumu: false
            }
      }
    }
    async EczacilikTerimAnlamCekme(terim: string){
        try {
        const response = await axios.request({
            url: `https://sozluk.gov.tr/eczacilik?ara=${encodeURI(terim)}`
        })
        const body = response.data[0];
        const terim_bulundumu = response.data.error ? false : true;
        const result = {
            terim: body?.terim,
            id: body?.soz_id,
            ingilizce: body?.ingilizce,
            tanim: body?.tanim,
            kontrol: body?.kontrol,
            terim_bulundumu
        }
        return result
    } catch(e){
        this.emit("eczacilikApiHata", e)
        return {
            terim: undefined,
            id: undefined,
            ingilizce: undefined,
            tanim: undefined,
            kontrol: undefined,
            terim_bulundumu
        }
      }
    }
    async KelimeLehceleriCekme(kelime: string){
        try {
            const response = await axios.request({
                url: `https://sozluk.gov.tr/lehceler?ara=${encodeURI(kelime)}`
            })
            const body = response.data[0]
            const kelime_bulundumu = response.data.error ? false : true
            const result = {
                azerice: {
                    azerice_1: body.azerice1,
                    azerice_2: body.azerice2,
                    azerice_3: body.azerice3,
                    azerice_4: body.azerice4
                },
                kazakca: {
                    kazakca_1: body.kazakca1,
                    kazakca_2: body.kazakca2,
                    kazakca_3: body.kazakca3,
                    kazakca_4: body.kazakca4
                },
                turkmence: {
                    turkmence_1: body.turkmence1,
                    turkmence_2: body.turkmence2,
                    turkmence_3: body.turkmence3,
                    turkmence_4: body.turkmence4
                },
                baskurtca: {
                    baskurtca_1: body.baskurtca1,
                    baskurtca_2: body.baskurtca2,
                    baskurtca_3: body.baskurtca3,
                    baskurtca_4: body.baskurtca4
                },
                kirgizca: {
                    kirgizca_1: body.kirgizca1,
                    kirgizca_2: body.kirgizca2,
                    kirgizca_3: body.kirgizca3,
                    kirgizca_4: body.kirgizca4
                },
                ozbekce: {
                    ozbekce_1: body.ozbekce1,
                    ozbekce_2: body.ozbekce2,
                    ozbekce_3: body.ozbekce3,
                    ozbekce_4: body.ozbekce4
                },
                tatarca: {
                    tatarca_1: body.tatarca1,
                    tatarca_2: body.tatarca2,
                    tatarca_3: body.tatarca3,
                    tatarca_4: body.tatarca4
                },
                uygurca: {
                    uygurca_1: body.uygurca1,
                    uygurca_2: body.uygurca2,
                    uygurca_3: body.uygurca3,
                    uygurca_4: body.uygurca4
                },
                kelime_bulundumu
            }
            return result
        } catch(e){
            this.emit("lehcelerApiHata", e)
            return {
                azerice: {
                    azerice_1: undefined,
                    azerice_2: undefined,
                    azerice_3: undefined,
                    azerice_4: undefined
                },
                kazakca: {
                    kazakca_1: undefined,
                    kazakca_2: undefined,
                    kazakca_3: undefined,
                    kazakca_4: undefined
                },
                turkmence: {
                    turkmence_1: undefined,
                    turkmence_2: undefined,
                    turkmence_3: undefined,
                    turkmence_4: undefined
                },
                baskurtca: {
                    baskurtca_1: undefined,
                    baskurtca_2: undefined,
                    baskurtca_3: undefined,
                    baskurtca_4: undefined
                },
                kirgizca: {
                    kirgizca_1: undefined,
                    kirgizca_2: undefined,
                    kirgizca_3: undefined,
                    kirgizca_4: undefined
                },
                ozbekce: {
                    ozbekce_1: undefined,
                    ozbekce_2: undefined,
                    ozbekce_3: undefined,
                    ozbekce_4: undefined
                },
                tatarca: {
                    tatarca_1: undefined,
                    tatarca_2: undefined,
                    tatarca_3: undefined,
                    tatarca_4: undefined
                },
                uygurca: {
                    uygurca_1: undefined,
                    uygurca_2: undefined,
                    uygurca_3: undefined,
                    uygurca_4: undefined
                },
                kelime_bulundumu: false
            }
        }
    }
    async KelimeYazimCekme(kelime: string){
        try {
        const response = await axios.request("https://sozluk.gov.tr/yazim?ara="+encodeURI(kelime))
        const body = response.data[0]
        const kelime_bulundumu = response.data.error ? false : true
        return {
            kelime: body?.sozu,
            id: body?.yazim_id,
            ses_kodu: body?.seskod,
            ekler: body?.ekler,
            kelime_bulundumu
        }
        } catch(e){
        this.emit("kelimeYazımApiHata", e)
        return {
            kelime: undefined,
            id: undefined,
            ses_kodu: undefined,
            ekler: undefined,
            kelime_bulundumu: false
        }
        }
    }
    async KelimeDerlemeVeriCekme(kelime: string){
        try {
        const response = await axios.request("https://sozluk.gov.tr/derleme?ara="+encodeURI(kelime))
        const body = response.data[0]
        const kelime_bulundumu = response.data.error ? false : true
        return {
            kelime: body?.madde,
            id: body?.madde_id,
            kunye_id: body?.kunye_id,
            asil_kelime: body?.asilkelim,
            anlam: body?.anlam,
            sehir: body?.sehir.replace("<b>", "").replace("</b>", ""),
            eser_ad: body?.eser_ad,
            kelime_bulundumu
        }
        } catch(e){
            this.emit("derlemeApiHata", e)
            return {
                kelime: undefined,
                id: undefined,
                kunye_id: undefined,
                asil_kelime: undefined,
                anlam: undefined,
                sehir: undefined,
                eser_ad: undefined,
                kelime_bulundumu: false
            }
        }
    }
}



export default new turkceSozlukApi()
