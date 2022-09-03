# turkce-sozluk-api

- Eskiden Yapılmıştı Fakat Yapımcının hesap değiştirmesinden dolayı yeniden yayınlandı: TDK üzerinden kelime, atasözü/deyim vs. anlamlarını aratmak için npm modülü.

![Image](https://img.shields.io/npm/dt/turkce-sozluk-api.svg?color=%2351FC0&maxAge=3600)
![Image](https://img.shields.io/npm/v/turkce-sozluk-api?color=red&label=turkce-sozluk-api)

# Nasıl Yüklenir

#### npm
```terminal
npm i turkce-sozluk-api
```
#### yarn
```terminal
yarn add turkce-sozluk-api
```

# 2.7.0 Yenilikler
- bir çok sorun düzeltildi.
- detaylar arttırıldı.
- KelimeYazimVeriCekme methodu eklendi artık kelimenin yazımı ile ilgili verileri çekebilirsiniz.
- KelimeDerlemeVeriCekme methodu eklendi artık kelimenin ağızdan çıkan kelimeleri girerek ağızdan çıkan halleri ile alakalı veri alabilirsiniz.
- derlemeApiHata ve kelimeYazimApiHata eventleri eklendi.


# Sorulma ihtimali olan bazı sorulara cevap
### Async/Await veya then kullanmadan kullanabilirmiyim?
- cevap: Maalesef sitelere istek atma işlemleri Promise tabanlı olduğu için kullanamazsınız.
### Verileri nerden çekiyorsunuz?
- cevap: sozluk.gov.tr sitesinin apisini kullanarak çekiyorum.


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
//hata parametresi node.js ve javascript ile alakalı bir parametredir.
//Kelime bulunamadığında tetiklenir.
console.log("Bir sorun oluştu galiba kelime bulunamadı.")
})
//atasözü/deyim hatası
turkceSozlukApi.on("atasozuDeyimApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir.
//Atasözü/Deyim bulunamadığında tetiklenir.
console.log("Bir sorun oluştu galiba atasözü/deyim bulunamadı.")
})
//isim hatası:
turkceSozlukApi.on("isimApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir.
//İsim bulunamadığında tetiklenir.
console.log("Bir sorun oluştu galiba isim bulunamadı.")
})
//id ile kelime hatası:
turkceSozlukApi.on("idIleKelimeApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir.
//Kelime bulunamadığında tetiklenir.
console.log("Bir sorun oluştu galiba kelime bulunamadı.")
})
//eczacılık terim hatası:
turkceSozlukApi.on("eczacilikApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir.
//Eczacılık sözlüğünde terim bulunamadığında tetiklenir.
console.log("Bir sorun oluştu galiba eczacılık sözlüğünde terim bulunamadı.")
})
//lehçeler hatası:
turkceSozlukApi.on("lehcelerApiHata", (hata) => {
//hata parametresi node.js ve javascript ile alakalı bir parametredir.
//kelime bulunamadığında tetiklenir.
console.log("Bir sorun oluştu galiba kelime lehçeleri bulunamadı.")
})
//kelime derleme veri hatası:
turkceSozlukApi.on("derlemeApiHata", (hata) => {
  //hata parametresi node.js ve javascript ile alakalı bir parametredir.
  //kelime derlemesi bulunamadığında tetiklenir.
  console.log("Bir sorun oluştu galiba kelime derlemeleri bulunamadı.")
})
//kelime yazım hatası:
turkceSozlukApi.on("kelimeYazımApiHata", (hata) => {
  //hata parametresi node.js ve javascript ile alakalı bir parametredir.
  //kelime bulunamadığında tetiklenir.
  console.log("Bir sorun oluştu galiba kelime bulunamadı.")
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
async function idKelimeDeneme() {
    return console.log(await turkceSozlukApi.IdIleKelimeAnlamCekme("5458"))
}
async function eczacilikDeneme() {
    return console.log(await turkceSozlukApi.EczacilikTerimAnlamCekme("antibiyotik"))
}
async function lehceDeneme() {
    return console.log(await turkceSozlukApi.KelimeLehceleriCekme("kardeş"))
}
async function yazimDeneme() {
    return console.log(await turkceSozlukApi.KelimeYazimCekme("hakim"))
}
async function derlemeDeneme() {
    return console.log(await turkceSozlukApi.KelimeDerlemeVeriCekme("gardaş"))
}


kelimeDeneme()
atasozu_deyimDeneme()
kelimekontroldeneme()
atasözüdeyimkontroldeneme()
isimkontroldeneme()
isimDeneme()
idKelimeDeneme()
eczacilikDeneme()
lehceDeneme()
yazimDeneme()
derlemeDeneme()
```
### Then ile Kullanım:
```js
turkceSozlukApi.KelimeAnlamCekme("baklava").then(veriler => console.log(veriler))
turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur").then(veriler => console.log(veriler))
turkceSozlukApi.KelimeKontrol("baklava").then(veriler => console.log(veriler))
turkceSozlukApi.AtasozuDeyimAnlamCekme("damlaya damlaya göl olur").then(veriler => console.log(veriler))
turkceSozlukApi.IsimKontrol("erkek", "davut").then(veriler => console.log(veriler))
turkceSozlukApi.IsimAnlamCekme("erkek", "davut").then(veriler => console.log(veriler))
turkceSozlukApi.IdIleKelimeAnlamCekme("5458").then(v => console.log(v))
turkceSozlukApi.EczacilikTerimAnlamCekme("antibiyotik").then((v) => console.log(v))
turkceSozlukApi.KelimeLehceleriCekme("kardeş").then((v) => console.log(v))
turkceSozlukApi.KelimeYazimCekme("hakim").then(v => console.log(v))
turkceSozlukApi.KelimeDerlemeVeriCekme("gardaş").then(v => console.log(v))
```

# Çıktılar
### Kelime Çıktı ve Id ile Kelime Çıktı:
```js
{
  kelime: 'baklava',
  id: '5458',
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
  ikinci_atasozu_deyim: undefined,
  ucuncu_atasozu_deyim: undefined,
  dorduncu_atasozu_deyim: undefined,
  ses_kodu: 'b0592',//ses kodunu kullanmak için yüklemeniz lazım örnek yükleme: https://sozluk.gov.tr/ses/b0592.wav maalesef sadece .wav uzantısı ile yükleyebiliyoruz(denediğim kadarıyla) siz yükledikten sonra uzantısını .mp3 yada daha farklı birşey yapabilirsiniz.
  kelime_bulundumu: true
}
```
#### Eğer kelime bulunamadı ise:
```js
{
  kelime: undefined,
  id: undefined,
  anlam: undefined,     
  ikinci_anlam: undefined,
  ucuncu_anlam: undefined,
  dorduncu_anlam: undefined,
  besinci_anlam: undefined,
  ozel_mi: false,
  cogul_mu: false,
  ornek: undefined,
  ikinci_ornek: undefined,
  birlesikler: undefined,
  atasozu_deyim: undefined,
  ikinci_atasozu_deyim: undefined,
  ucuncu_atasozu_deyim: undefined,
  dorduncu_atasozu_deyim: undefined,
  ses_kodu: undefined,
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
### Eczacılık Çıktı:
```js
{
  terim: 'antibiyotik',
  id: '700',
  ingilizce: 'antibiotic',
  tanim: 'Temel yapısı bazı bakteri ve mantarlardan fermentasyon yoluyla elde edilen, patolojik mikroorganizmaların gelişimini durdurmak veya öldürmek amacıyla doğrudan veya kimyasal olarak türevlendirildikten sonra kullanılan biyoteknolojik ürün. ',
  kontrol: '',
  terim_bulundumu: true
}
```
### eğer bulunamadı ise:
```js
{
  terim: undefined,
  id: 'undefined,
  ingilizce: undefined,
  tanim: undefined,
  kontrol: undefined,
  terim_bulundumu: false
}
```
### Kelime Lehçeler Çıktı:
```js
{
  azerice: {
    azerice_1: 'gardaş',
    azerice_2: null,
    azerice_3: null,
    azerice_4: null
  },
  kazakca: {
    kazakca_1: 'ağayın',
    kazakca_2: 'bavır',
    kazakca_3: null,
    kazakca_4: null
  },
  turkmence: {
    turkmence_1: 'doğan',
    turkmence_2: null,
    turkmence_3: null,
    turkmence_4: null
  },
  baskurtca: {
    baskurtca_1: 'kärⱬäş',
    baskurtca_2: 'tuğan',
    baskurtca_3: null,
    baskurtca_4: null
  },
  kirgizca: {
    kirgizca_1: 'tūğan',
    kirgizca_2: 'karındaş',
    kirgizca_3: null,
    kirgizca_4: null
  },
  ozbekce: {
    ozbekce_1: 'biràdàr',
    ozbekce_2: 'tuğışgän',
    ozbekce_3: null,
    ozbekce_4: null
  },
  tatarca: {
    tatarca_1: 'kardäş',
    tatarca_2: 'tuğan',
    tatarca_3: null,
    tatarca_4: null
  },
  uygurca: {
    uygurca_1: 'ḳerindaş',
    uygurca_2: null,
    uygurca_3: null,
    uygurca_4: null
  },
  kelime_bulundumu: true
}
```
### eğer bulunamadı ise:
```js
{
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
```
### Kelime Yazım çıktı:
```js
{
  kelime: 'hakim ',
  id: '29377',
  ses_kodu: 'h0229',
  ekler: '',
  kelime_bulundumu: true
}
```
### eğer bulunamadı ise:
```js
{
  kelime: undefined,
  id: undefined,
  ses_kodu: undefined,
  ekler: undefined,
  kelime_bulundumu: false
}
```
### Kelime Derleme çıktı:
```js
{
  kelime: 'gardaş',
  id: '87343',
  kunye_id: '15',
  asil_kelime: 'kardeş',
  anlam: 'Kardeş',
  sehir: 'Diyarbakır',
  eser_ad: 'Diyarbakır Ağzı, İnceleme-Metinler-Sözlük',
  kelime_bulundumu: true
}
```
### eğer bulunamadı ise:
```js
{
  kelime: undefined,
  id: undefined,
  kunye_id: undefined,
  asil_kelime: undefined,
  anlam: undefined,
  sehir: undefined,
  eser_ad: undefined,
  kelime_bulundumu: false
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
