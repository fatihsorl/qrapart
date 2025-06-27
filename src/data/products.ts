import { Product } from "@/types";

export const products: Product[] = [
  // Restaurant - İçecekler
  {
    id: "1",
    name: "Ayran",
    description: "Geleneksel Türk yoğurt içeceği",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "drinks",
  },
  {
    id: "2",
    name: "Türk Kahvesi",
    description: "Geleneksel Türk kahvesi",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "drinks",
  },
  {
    id: "3",
    name: "Çay",
    description: "Demli Türk çayı",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "drinks",
  },
  {
    id: "4",
    name: "Limonata",
    description: "Ev yapımı taze limonata",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "drinks",
  },
  {
    id: "5",
    name: "Portakal Suyu",
    description: "Taze sıkılmış portakal suyu",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "drinks",
  },

  // Restaurant - Tost Çeşitleri
  {
    id: "6",
    name: "Kaşarlı Tost",
    description: "Bol kaşarlı tost",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "toasts",
  },
  {
    id: "7",
    name: "Karışık Tost",
    description: "Kaşar, sucuk ve domates ile hazırlanmış karışık tost",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "toasts",
  },
  {
    id: "8",
    name: "Sucuklu Tost",
    description: "Bol sucuklu tost",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "toasts",
  },
  {
    id: "9",
    name: "Ayvalık Tostu",
    description: "Özel soslu, kaşarlı, sucuklu ve turşulu Ayvalık tostu",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "toasts",
  },

  // Restaurant - Ana Yemekler
  {
    id: "10",
    name: "Izgara Köfte",
    description: "Yanında pilav ve salata ile servis edilen ızgara köfte",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "mainDishes",
  },
  {
    id: "11",
    name: "Tavuk Şiş",
    description: "Özel baharatlarla marine edilmiş tavuk şiş",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "mainDishes",
  },
  {
    id: "12",
    name: "Adana Kebap",
    description: "Acılı kıyma kebabı, yanında lavaş ve soğan ile",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "mainDishes",
  },
  {
    id: "13",
    name: "İskender Kebap",
    description:
      "Döner, yoğurt, tereyağı ve domates sosu ile servis edilen kebap",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1644364935906-dca34c0e2dba?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "mainDishes",
  },

  // Restaurant - Kahvaltı & Hafif Yemekler
  {
    id: "14",
    name: "Serpme Kahvaltı",
    description: "Zengin içerikli serpme kahvaltı tabağı",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },
  {
    id: "15",
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
    id: "16",
    name: "Omlet",
    description: "Peynirli veya sebzeli omlet seçeneği",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1612487439139-c2963a0e8cb6?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },
  {
    id: "17",
    name: "Simit & Peynir",
    description: "Taze simit ve beyaz peynir tabağı",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1585540083814-ea6ee8af9e4f?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "breakfast",
  },

  // Restaurant - Öğle Yemeği
  {
    id: "18",
    name: "Mercimek Çorbası",
    description: "Geleneksel Türk mercimek çorbası",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "lunch",
  },
  {
    id: "19",
    name: "Etli Güveç",
    description: "Sebzeli ve etli güveç, yanında pilav ile",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?q=80&w=500&auto=format&fit=crop",
    category: "restaurant",
    subcategory: "lunch",
  },

  // Restaurant - Akşam Yemeği
  {
    id: "20",
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
    id: "21",
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
    id: "22",
    name: "Yerli Bira",
    description: "Soğuk yerli bira",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "23",
    name: "Kırmızı Şarap",
    description: "Kadeh kırmızı şarap",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "24",
    name: "Meyve Suyu",
    description: "Taze sıkılmış portakal, elma veya nar suyu",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "drinks",
  },
  {
    id: "25",
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
    id: "26",
    name: "Baklava",
    description: "Fıstıklı baklava",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "27",
    name: "Sütlaç",
    description: "Fırında pişirilmiş geleneksel sütlaç",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1601312540037-095ace5cef8d?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "28",
    name: "Cips",
    description: "Patates cipsi",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },
  {
    id: "29",
    name: "Çikolata",
    description: "Sütlü çikolata",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=500&auto=format&fit=crop",
    category: "minibar",
    subcategory: "snacks",
  },

  // Market - Kişisel Bakım
  {
    id: "30",
    name: "Diş Fırçası",
    description: "Yumuşak diş fırçası",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1559591934-60c904a4a1b2?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },
  {
    id: "31",
    name: "Diş Macunu",
    description: "Nane aromalı diş macunu",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },
  {
    id: "32",
    name: "Duş Jeli",
    description: "Ferahlatıcı duş jeli",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "personalCare",
  },

  // Market - Hediyelik Eşya
  {
    id: "33",
    name: "Magnet",
    description: "Şehir temalı buzdolabı magneti",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1620236104164-d2e71d7f4b1f?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
  {
    id: "34",
    name: "Anahtarlık",
    description: "Şehir temalı anahtarlık",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1611001440648-0ea68d2cd66f?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
  {
    id: "35",
    name: "Tişört",
    description: "Şehir temalı tişört",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
    category: "market",
    subcategory: "souvenirs",
  },
];
