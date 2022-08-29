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

# 2.5.0 Yenilikler
- TypeScript desteği geldi artık TypeScript kullananlar modülü kullanabilecek.
- apiHata eventi kaldırıldı.
- kelimeApiHata, atasozuDeyimApiHata ve isimApiHata eventleri eklendi
- artık kelime bulunamadığında tüm çıktılar undefined olarak kelime_bulundumu ise false olarak dönecektir.
- artık atasözü bulunamadığında tüm çıktılar undefined olarak soz_bulundumu ise false olarak dönecektir.
- IsımAnlamCekme ve IsimKontrol fonksiyonları eklendi.
- Artık CommonJS ile yazanlar import ederken default kullanmaları gerek örnek kullanım: const turkceSozlukApi = require("turkce-sozluk-api").default

# Sorulma ihtimali olan bazı sorulara cevap
### Async/Await ve then kullanmadan kullanabilirmiyim?
- cevap: Maalesef sitelere istek atma işlemleri Promise tabanlı olduğu için kullanamazsınız.


# Nasıl Kullanılır
Import Etmek.

CommonJS.
```js
const turkceSozlukApi = require("turkce-sozluk-api").default
```
ESModule
```mjs
import turkceSozlukApi from "turkce-sozluk-api"
//yada
const turkceSozlukApi = await import("turkce-sozluk-api/esm/index.mjs").then(m => m.default)
```
TypeScript
```js
import turkceSozlukApi from "turkce-sozluk-api"
```

Kullanım:
### Eventler:
```js
//kelime hatası:
turkceSozlukApi.on("kelimeApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir eğer bu hata tetiklenirse modül sahibi ile iletişime geçin
console.error(hata)
})
//atasözü/deyim hatası
turkceSozlukApi.on("atasozuDeyimApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir eğer bu hata tetiklenirse modül sahibi ile iletişime geçin
console.error(hata)
})
//isim hatası:
turkceSozlukApi.on("isimApiHata", (hata) => {
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
async function atasozudeyimkontroldeneme() {
    return console.log(await turkceSozlukApi.AtasozuDeyimKontrol("damlaya damlaya göl olur"))
}
async function isimkontroldeneme() {
    return console.log(await turkceSozlukApi.IsimKontrol("erkek", "davut"))
}
async function isimDeneme() {
    return console.log(await turkceSozlukApi.IsimAnlamCekme("erkek", "davut"))
}

kelimeDeneme()
atasozu_deyimDeneme()
kelimekontroldeneme()
atasözüdeyimkontroldeneme()
isimkontroldeneme()
isimDeneme()
```
### Then ile Kullanım:
```js
turkceSozlukApi.KelimeAnlamCekme("baklava").then(veriler => console.log(veriler))
turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur").then(veriler => console.log(veriler))
turkceSozlukApi.KelimeKontrol("baklava").then(veriler => console.log(veriler))
turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur").then(veriler => console.log(veriler))
turkceSozlukApi.IsimKontrol("erkek", "davut").then(veriler => console.log(veriler))
turkceSozlukApi.IsimAnlamCekme("erkek", "davut").then(veriler => console.log(veriler))
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
### İsim Çıktı:
```js
{
  ad: 'Davut',
  anlam: '1. Sevgili, aziz.2. İsraillilerin, sesinin güzelliği ve şairliği ile tanınan hükümdar ve peygamberi.',
  cinsiyeti: 'Erkek',
  isim_bulundumu: true
}
```
### eğer bulunamadı ise:
```js
{
  ad: undefined,
  anlam: undefined,
  cinsiyeti: undefined,
  isim_bulundumu: false
}
```
### Kelime Kontrol Çıktı:
```js
true //eğer true ise kelime mevcuttur false ise mevcut değildir
```
### Atasözü/Deyim Kontrol Çıktı:
```js
true //eğer true ise atasözü/deyim mevcuttur false ise mevcut değildir
```
### İsim Kontrol Çıktı:
```js
true //eğer true ise isim mevcuttur false ise mevcut değildir
```
# Iletişim:
<a href="https://discord.com/users/586995957695119477">Discord</a>
