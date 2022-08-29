import EventEmitter from "node:events"
declare module "turkce-sozluk-api"{
    export type KelimeAnlamCekmeReturns = {
        kelime: string
        anlam: string | undefined
        ikinci_anlam: string | undefined
        ucuncu_anlam: string | undefined
        dorduncu_anlam: string | undefined
        besinci_anlam: string | undefined
        ozel_mi: boolean | undefined
        cogul_mu: boolean | undefined
        ornek: string | undefined
        ikinci_ornek: string | undefined
        birlesikler: string | undefined
        kelime_bulundumu: boolean
        atasozu_deyim: string | undefined
    } | undefined
    export type AtasozuDeyimAnlamCekmeReturns = {
        soz: string | undefined
        anlam: string | undefined
        anahtar_kelimeler: string | undefined
        atasozu_mu_deyim_mi: string | undefined
        soz_bulundumu: boolean
    } | undefined
    export type IsımAnlamCekmeReturns = {
        ad: string | undefined
        anlam: string | undefined
        cinsiyeti: boolean | undefined
        isim_bulundumu: boolean
    }
    export type Events = "isimApiHata" | "atasozuDeyimApiHata" | "kelimeApiHata"
    class turkceSozlukApi extends EventEmitter{
        public KelimeAnlamCekme(kelime: string): Promise<KelimeAnlamCekmeReturns>
        public AtasozuDeyimAnlamCekme(inputSoz: string): Promise<AtasozuDeyimAnlamCekmeReturns>
        public KelimeKontrol(kelime: string): Promise<boolean>
        public AtasozuDeyimKontrol(atasozu: string): Promise<boolean>
        public IsimAnlamCekme(): Promise<IsımAnlamCekmeReturns>
        public IsimKontrol(cinsiyet: string, isim: string): Promise<boolean>
    }
    export default new turkceSozlukApi()
}
