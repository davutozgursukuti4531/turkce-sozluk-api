export type KelimeAnlamCekmeReturns = {
    kelime: string | undefined
    id: string | undefined
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
}
export type AtasozuDeyimAnlamCekmeReturns = {
    soz: string | undefined
    id: string | undefined
    anlam: string | undefined
    anahtar_kelimeler: string | undefined
    atasozu_mu_deyim_mi: string | undefined
    soz_bulundumu: boolean
}
export type IsımAnlamCekmeReturns = {
    ad: string | undefined
    id: string | undefined
    anlam: string | undefined
    cinsiyeti: string | undefined
    isim_bulundumu: boolean
}
export type EczacilikTerimAnlamCekmeReturns = {
    terim: string | undefined
    id: string | undefined,
    ingilizce: string | undefined
    tanim: string | undefined
    kontrol: string | undefined
}
export type KelimeLehcelerCekmeReturns = {
    azerice: {
        azerice_1: string | undefined,
        azerice_2: string | undefined,
        azerice_3: string | undefined,
        azerice_4: string | undefined
    },
    kazakca: {
        kazakca_1: string | undefined,
        kazakca_2: string | undefined,
        kazakca_3: string | undefined,
        kazakca_4: string | undefined
    },
    turkmence: {
        turkmence_1: string | undefined,
        turkmence_2: string | undefined,
        turkmence_3: string | undefined,
        turkmence_4: string | undefined
    },
    baskurtca: {
        baskurtca_1: string | undefined,
        baskurtca_2: string | undefined,
        baskurtca_3: string | undefined,
        baskurtca_4: string | undefined
    },
    kirgizca: {
        kirgizca_1: string | undefined,
        kirgizca_2: string | undefined,
        kirgizca_3: string | undefined,
        kirgizca_4: string | undefined
    },
    ozbekce: {
        ozbekce_1: string | undefined,
        ozbekce_2: string | undefined,
        ozbekce_3: string | undefined,
        ozbekce_4: string | undefined
    },
    tatarca: {
        tatarca_1: string | undefined,
        tatarca_2: string | undefined,
        tatarca_3: string | undefined,
        tatarca_4: string | undefined
    },
    uygurca: {
        uygurca_1: string | undefined,
        uygurca_2: string | undefined,
        uygurca_3: string | undefined,
        uygurca_4: string | undefined
    },
    kelime_bulundumu: boolean
}
export type Events = "isimApiHata" | "atasozuDeyimApiHata" | "kelimeApiHata"
