# turkce-sozluk-api

- Eskiden Yapılmıştı Fakat Yapımcının hesap değiştirmesinden dolayı yeniden yayınlandı: TDK üzerinden kelime, atasözü/deyim vs. anlamlarını aratmak için npm modülü.

# Nasıl Yüklenir

#### npm
```terminal
npm i turkce-sozluk-api
```
#### yarn
```terminal
yarn add turkce-sozluk-api
```

# 2.3.0 Yenilikler
- 2.2.0 da bulunan AtasozuDeyimKontrol fonksiyonu düzeltildi.
# Nasıl Kullanılır
Import Etmek.

CommonJS.
```js
const turkceSozlukApi = require("turkce-sozluk-api")
```
ESModule
```mjs
import turkceSozlukApi from "turkce-sozluk-api"
```

Kullanım:
### Eventler:
```js
//Kelime için kullanım:
turkceSozlukApi.KelimeAnlamCekme("sjsadksadsamlkdmasdlkas").then(veri => veri)//veri undefined olarak döner.
//Yukarıdaki Mantıkta Kullanılırsa Hata Tetiklenir.
turkceSozlukApi.on("KelimeAnlamCekmeHata", (hata) => {
  //hata parametresi klasik JavaScript hata parametresidir.
  console.log("Bir hata oluştu, Galiba kelime Bulunamadı.")
})

//Atasözü/Deyim için kullanım:
turkceSozlukApi.AtasozuDeyimAnlamCekme("sjsadksadsamlkdmasdlkas").then(veri => veri)//veri undefined olarak döner.
//Yukarıdaki Mantıkta Kullanılırsa Hata Tetiklenir.
turkceSozlukApi.on("AtasozuDeyimAnlamCekmeHata", (hata) => {
  //hata parametresi klasik JavaScript hata parametresidir.
  console.log("Bir hata oluştu, Galiba atasözü/deyim Bulunamadı.")
})
```
### Async Function ile Kullanım:
```js
async function kelimeDeneme() {
    return console.log(await turkceSozlukApi.KelimeAnlamCekme("baklava"))
}
async function atasozu_deyimDeneme() {
    return console.log(await turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur"))
}
async function kelimekontroldeneme() {
    return console.log(await turkceSozlukApi.KelimeKontrol("baklava"))
}
async function atasözüdeyimkontroldeneme() {
    return console.log(await turkceSozlukApi.AtasözüDeyimKontrol("damlaya damlaya göl olur"))
}

kelimeDeneme()
atasozu_deyimDeneme()
kelimekontroldeneme()
atasözüdeyimkontroldeneme()
```
### Then ile Kullanım:
```js
turkceSozlukApi.KelimeAnlamCekme("baklava").then(veriler => console.log(veriler))
turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur").then(veriler => console.log(veriler))
turkceSozlukApi.KelimeKontrol("baklava").then(veriler => console.log(veriler))
turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur").then(veriler => console.log(veriler))
```

# Çıktılar
### Kelime Çıktı:
```js
{
  kelime: 'baklava',
  anlam: 'Çok ince yufkadan yapılarak arasına kaymak, fıstık, ceviz, badem vb. konulup pişirilen ve üzerine şeker şerbeti dökülen bir tatlı türü',     
  ikinci_anlam: 'Eşkenar dörtgen biçiminde olan nesne',
  ucuncu_anlam: undefined,
  dorduncu_anlam: undefined,
  besinci_anlam: undefined,
  ozel_mi: false,
  cogul_mu: false,
  ornek: undefined,
  ikinci_ornek: "Yeşil kadifeden dikilmiş yarım baklava şeklinde muska çok ufakken üzerine gelen havaleden Fikret'i kurtarırmış.",
  birlesikler: 'baklava börek, baklava dilimi',
  atasozu_deyim: 'baklava açmak'
}
```
### Atasözü/Deyim Çıktı:
```js
{
  soz: 'damlaya damlaya göl olur',
  anlam: 'azar azar olagelen şeyler birikerek önemli bir niceliğe ulaşacağı için küçümsenmemelidir.',
  anahtar_kelimeler: 'damlamak, olmak',
  atasozu_mu_deyim_mi: 'Atasözü'
}
```
### Kelime Kontrol Çıktı:
```js
true //eğer true is kelime mevcuttur false ise mevcut değildir
```
### Atasözü/Deyim Kontrol Çıktı:
```js
true //eğer true is atasözü/deyim mevcuttur false ise mevcut değildir
```
# Iletişim:
<a href="https://discord.com/users/586995957695119477">Discord</a>
