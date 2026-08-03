export type StoreProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  marketplace: "Amazon" | "Shopee" | "Mercado Livre" | "Magalu";
  marketplaceSlug: "amazon" | "shopee" | "mercado-livre" | "magalu";
  imageUrl: string;
  badge: string;
  rating: number;
  reviewCount: number;
  category: string;
  featured?: boolean;
  dailyOffer?: boolean;
  gerraydChoice?: boolean;
};

export const storeProducts: StoreProduct[] = [
  {
    id: "fone-pro-h6s",
    name: "Fone de Ouvido Bluetooth Pro H6S",
    description: "Som de alta qualidade e conexao estavel.",
    price: 129.9,
    oldPrice: 169.9,
    marketplace: "Magalu",
    marketplaceSlug: "magalu",
    imageUrl: "/products/fone-h6s.svg",
    badge: "Eletronicos",
    rating: 4.7,
    reviewCount: 3214,
    category: "Eletronicos",
    featured: true,
  },
  {
    id: "air-fryer-mondial",
    name: "Air Fryer Mondial AFN-40-4L",
    description: "Mais praticidade e saude no seu dia a dia.",
    price: 299.9,
    oldPrice: 369.9,
    marketplace: "Shopee",
    marketplaceSlug: "shopee",
    imageUrl: "/products/air-fryer.svg",
    badge: "Casa",
    rating: 4.8,
    reviewCount: 12579,
    category: "Cozinha",
    featured: true,
  },
  {
    id: "mop-flash-limp",
    name: "Mop Giratorio Flash Limp Facil",
    description: "Limpeza pratica e sem esforco.",
    price: 169.9,
    oldPrice: 199.9,
    marketplace: "Mercado Livre",
    marketplaceSlug: "mercado-livre",
    imageUrl: "/products/mop-flash.svg",
    badge: "Casa e Decoracao",
    rating: 4.6,
    reviewCount: 5821,
    category: "Casa",
    featured: true,
  },
  {
    id: "chapinha-philco",
    name: "Chapinha Ceramica Philco Bivolt",
    description: "Cabelos lisos e brilhantes todos os dias.",
    price: 119.9,
    oldPrice: 149.9,
    marketplace: "Amazon",
    marketplaceSlug: "amazon",
    imageUrl: "/products/chapinha.svg",
    badge: "Beleza",
    rating: 4.8,
    reviewCount: 4176,
    category: "Beleza",
    featured: true,
  },
  {
    id: "parafusadeira-mondial",
    name: "Parafusadeira Mondial FPF-06M",
    description: "Com 11 acessorios para reparos do dia a dia.",
    price: 89.9,
    oldPrice: 149.9,
    marketplace: "Magalu",
    marketplaceSlug: "magalu",
    imageUrl: "/products/parafusadeira.svg",
    badge: "Ferramentas",
    rating: 4.5,
    reviewCount: 1932,
    category: "Ferramentas",
    featured: true,
  },
];

export const homeHighlights = [
  { title: "Top 10 eletronicos em oferta", subtitle: "Ver selecao" },
  { title: "Achados para casa", subtitle: "Ver selecao" },
  { title: "Itens baratos que valem a pena", subtitle: "Ver selecao" },
  { title: "Ofertas relampago", subtitle: "Ver selecao" },
];

export const categories = [
  "Eletronicos",
  "Celulares",
  "Informatica",
  "Casa",
  "Cozinha",
  "Beleza",
  "Moda",
  "Ferramentas",
  "Gamer",
  "Audio",
  "Eletrodomesticos",
  "Brinquedos",
];

export const relatedSearches = [
  "fone sem fio",
  "fone bluetooth bom e barato",
  "fone bluetooth com microfone",
  "fone bluetooth esportivo",
  "fone bluetooth com noise canceling",
];

export const coupons = [
  {
    store: "Amazon",
    title: "Cupom de primeira compra",
    code: "GERRAYD10",
    expiresAt: "31/08/2026",
  },
  {
    store: "Shopee",
    title: "Frete gratis em pedidos selecionados",
    code: "FRETEGERRAYD",
    expiresAt: "05/08/2026",
  },
];
