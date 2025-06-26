# Otel QR Menü Uygulaması

Bu proje, otel misafirlerinin kendi cihazlarıyla QR kod üzerinden erişebilecekleri bir menü uygulamasıdır. Kullanıcılar yemek ve market ürünlerini inceleyebilir, sepete ekleyebilir ve sipariş verebilirler.

## Özellikler

- Ana kategoriler, alt kategoriler ve ürün detayları
- Sepete ürün ekleme ve sipariş verme
- Sipariş özeti ekranı (ürün, adet, not, tarih/saat)
- Personel çağırma butonu
- Çoklu dil desteği (Türkçe, İngilizce, Rusça, Arapça)
- Görsel ağırlıklı, sade ve kullanıcı dostu tasarım

## Teknolojiler

- Next.js 14
- TypeScript
- Tailwind CSS
- next-intl (Çoklu dil desteği)
- React Context API (Sepet yönetimi)

## Kurulum

1. Projeyi klonlayın:

```bash
git clone <repo-url>
cd otelqr
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## Kullanım

- Ana sayfada kategorilere göre ürünleri görüntüleyin
- Ürünleri sepete ekleyin
- Sepet sayfasından siparişinizi tamamlayın
- Personel çağırmak için "Personel Çağır" butonunu kullanın
- Sağ üstteki dil seçeneğinden istediğiniz dili seçin

## Yapı

- `/src/app/[locale]`: Sayfa bileşenleri
- `/src/components`: UI bileşenleri
- `/src/context`: Context API dosyaları
- `/src/data`: Örnek veri dosyaları
- `/src/messages`: Dil çevirileri
- `/src/types`: TypeScript tip tanımlamaları

## Notlar

- Bu uygulama sadece frontend tarafını içermektedir. Gerçek bir uygulamada, siparişlerin yönetimi için bir backend sistemi gereklidir.
- Ürün görselleri için `/public/images/products` dizinine ürün görselleri eklenmelidir.
