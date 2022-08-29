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
    cinsiyeti: string | undefined
    isim_bulundumu: boolean
}
export type Events = "isimApiHata" | "atasozuDeyimApiHata" | "kelimeApiHata"
