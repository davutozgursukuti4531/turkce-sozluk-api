type KelimeAnlamCekmeReturns = Promise<{
    kelime: string
    anlam: string
    ikinci_anlam: string
    ucuncu_anlam: string
    dorduncu_anlam: string
    besinci_anlam: string
    ozel_mi: boolean
    cogul_mu: boolean
    birlesikler: string
}>
type AtasozuDeyimAnlamCekmeReturns = Promise<{
    soz: string
    anlam: string
    anahtar_kelimeler: string
    atasozu_mu_deyim_mi: string
}>

export { KelimeAnlamCekmeReturns, AtasozuDeyimAnlamCekmeReturns }
