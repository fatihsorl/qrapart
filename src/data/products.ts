import { Product } from "@/types";

export const products: Product[] = [
  // Restoran - Kahvaltı
  {
    id: "1",
    name: "Serpme Kahvaltı",
    description: "Zengin içerikli serpme kahvaltı tabağı",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },
  {
    id: "2",
    name: "Menemen",
    description:
      "Domates, biber ve yumurta ile hazırlanmış geleneksel Türk kahvaltısı",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },
  {
    id: "19",
    name: "Simit & Peynir",
    description: "Taze simit ve beyaz peynir tabağı",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1585540083814-ea6ee8af9e4f?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },
  {
    id: "20",
    name: "Omlet",
    description: "Peynirli veya sebzeli omlet seçeneği",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1612487439139-c2963a0e8cb6?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },

  // Restoran - Öğle Yemeği
  {
    id: "3",
    name: "Izgara Köfte",
    description: "Yanında pilav ve salata ile servis edilen ızgara köfte",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "lunch",
  },
  {
    id: "4",
    name: "Tavuk Şiş",
    description: "Özel baharatlarla marine edilmiş tavuk şiş",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "lunch",
  },
  {
    id: "21",
    name: "Mercimek Çorbası",
    description: "Geleneksel Türk mercimek çorbası",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "lunch",
  },
  {
    id: "22",
    name: "Etli Güveç",
    description: "Sebzeli ve etli güveç, yanında pilav ile",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "lunch",
  },

  // Restoran - Akşam Yemeği
  {
    id: "5",
    name: "Karışık Izgara",
    description:
      "Köfte, pirzola, tavuk ve sebzelerden oluşan karışık ızgara tabağı",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "dinner",
  },
  {
    id: "6",
    name: "Adana Kebap",
    description: "Acılı kıyma kebabı, yanında lavaş ve soğan ile",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "dinner",
  },
  {
    id: "23",
    name: "İskender Kebap",
    description:
      "Döner, yoğurt, tereyağı ve domates sosu ile servis edilen kebap",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1644364935906-dca34c0e2dba?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "dinner",
  },
  {
    id: "24",
    name: "Balık Izgara",
    description: "Mevsim balığı ızgara, yanında salata ve patates ile",
    price: 170,
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "dinner",
  },

  // Mini Bar - İçecekler
  {
    id: "7",
    name: "Ayran",
    description: "Geleneksel Türk yoğurt içeceği",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "8",
    name: "Türk Kahvesi",
    description: "Geleneksel Türk kahvesi",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "9",
    name: "Yerli Bira",
    description: "Soğuk yerli bira",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "10",
    name: "Kırmızı Şarap",
    description: "Kadeh kırmızı şarap",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "25",
    name: "Meyve Suyu",
    description: "Taze sıkılmış portakal, elma veya nar suyu",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "26",
    name: "Soda",
    description: "Maden suyu veya meyveli soda çeşitleri",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1598614187854-26a60e982dc4?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },

  // Mini Bar - Atıştırmalıklar
  {
    id: "11",
    name: "Baklava",
    description: "Fıstıklı baklava",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "12",
    name: "Sütlaç",
    description: "Fırında pişirilmiş geleneksel sütlaç",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1601312540037-095ace5cef8d?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "13",
    name: "Cips",
    description: "Patates cipsi",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "14",
    name: "Çikolata",
    description: "Sütlü çikolata",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "27",
    name: "Kuruyemiş",
    description: "Karışık kuruyemiş paketi",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1536591375067-d73f7aa11f28?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "28",
    name: "Meyve Tabağı",
    description: "Mevsim meyveleri tabağı",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },

  // Market - Kişisel Bakım
  {
    id: "15",
    name: "Diş Fırçası",
    description: "Yumuşak diş fırçası",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1559591922-04b4893c758f?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },
  {
    id: "16",
    name: "Diş Macunu",
    description: "Nane aromalı diş macunu",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },
  {
    id: "29",
    name: "Şampuan",
    description: "Saç tiplerine uygun şampuan çeşitleri",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1626784215021-2e914faa9950?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },
  {
    id: "30",
    name: "Güneş Kremi",
    description: "SPF 50+ koruma faktörlü güneş kremi",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },

  // Market - Hediyelik Eşya
  {
    id: "17",
    name: "Türk Lokumu",
    description: "Geleneksel Türk lokumu",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1577004686904-1a4f118acf61?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
  {
    id: "18",
    name: "Magnet",
    description: "Türkiye temalı buzdolabı magneti",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
  {
    id: "31",
    name: "El Yapımı Seramik",
    description: "Yerel zanaatkarlar tarafından yapılmış seramik eşyalar",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
  {
    id: "32",
    name: "Türk Halısı (Minyatür)",
    description: "El dokuma minyatür Türk halısı",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1582903222004-c1dfa5b8a4e9?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
];
