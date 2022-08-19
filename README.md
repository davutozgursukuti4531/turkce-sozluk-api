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

# 2.4.0 Yenilikler
- artık bu ve bundan sonra yayınlanan sürümlerde modül sürümü güncel değil ise terminale bir yazı yazdırılacak.
- KelimeAnlamCekmeHata ve AtasozuDeyimAnlamCekmeHata eventleri kaldırıldı.
- apiHata eventi eklendi eğer bu hata tetiklenirse discord dan modül sahibi ile iletişime geçiniz.
- AtasozuDeyimAnlamCekme fonksiyonuna atara ve soz_bulundumu değerleri eklendi
- KelimeAnlamCekme fonksiyonuna kelime_bulundumu değeri eklendi ve eğer kelime bulunamaz ise { kelime_bulundumu: false } şeklinde dönecektir

# Sorulam ihtimali olan bazı sorulara cevap
### Async/Await ve then kullanmadan kullanabilirmiyim?
- cevap: Maalesef sitelere istek atma işlemleri Promise tabanlı olduğu için kullanamazsınız.


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
turkceSozlukApi.on("apiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir eğer bu hata tetiklenirse modül sahibi ile iletişime geçin
console.error(hata)
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
  atasozu_deyim: 'baklava açmak',
  kelime_bulundumu: true
}
```
#### Eğer kelime bulunamadı ise:
```js
{
  kelime_bulundumu: false
}
```
### Atasözü/Deyim Çıktı:
```js
{
  soz: 'damlaya damlaya göl olur',
  anlam: 'azar azar olagelen şeyler birikerek önemli bir niceliğe ulaşacağı için küçümsenmemelidir.',
  anahtar_kelimeler: 'damlamak, olmak',
  atasozu_mu_deyim_mi: 'Atasözü',
  soz_bulundumu: true
}
```
#### eğer bulunamadı ise:
```js
{
  soz: undefined,
  anlam: undefined,
  anahtar_kelimeler: undefined,
  atasozu_mu_deyim_mi: undefined,
  soz_bulundumu: false
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
