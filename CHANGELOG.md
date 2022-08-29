# 2.1.0

- created Module.

# 2.2.0

- Eventler eklendi.
- KelimeKontrol fonksiyonu eklendi.
- Detaylar arttırıldı.
- AtasozuDeyimKontrol fonksiyonu eklendi.

# 2.3.0

- 2.2.0 da bulunan AtasozuDeyimKontrol fonksiyonu düzeltildi.

# 2.4.0

- artık bu ve bundan sonra yayınlanan sürümlerde modül sürümü güncel değil ise terminale bir yazı yazdırılacak.
- KelimeAnlamCekmeHata ve AtasozuDeyimAnlamCekmeHata eventleri kaldırıldı.
- apiHata eventi eklendi eğer bu hata tetiklenirse discord dan modül sahibi ile iletişime geçiniz.
- AtasozuDeyimAnlamCekme fonksiyonuna soz_bulundumu değeri eklendi.
- KelimeAnlamCekme fonksiyonuna kelime_bulundumu değeri eklendi ve eğer kelime bulunamaz ise { kelime_bulundumu: false } şeklinde dönecektir.

# 2.5.0

- TypeScript desteği geldi artık TypeScript kullananlar modülü kullanabilecek.
- apiHata eventi kaldırıldı.
- kelimeApiHata, atasozuDeyimApiHata ve isimApiHata eventleri eklendi
- artık kelime bulunamadığında tüm çıktılar undefined olarak kelime_bulundumu ise false olarak dönecektir.
- artık atasözü bulunamadığında tüm çıktılar undefined olarak soz_bulundumu ise false olarak dönecektir.
- IsımAnlamCekme ve IsimKontrol fonksiyonları eklendi.
- Artık CommonJS ile yazanlar import ederken default kullanmaları gerek örnek kullanım: const turkceSozlukApi = require("turkce-sozluk-api").default
