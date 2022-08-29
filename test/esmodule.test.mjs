const turkceSozlukApi = await import("../esm/index.mjs").then(m => m.default)


async function kelimeDeneme() {
    return console.log(await turkceSozlukApi.KelimeAnlamCekme("baklava"))
}
async function atasozu_deyimDeneme() {
    return console.log(await turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur"))
}
kelimeDeneme()
atasozu_deyimDeneme()
