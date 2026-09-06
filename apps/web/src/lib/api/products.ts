export type CatalogItem = {
  title: string;
  image: string;
  price: string;
  reviews: number;
};

const CATALOG: CatalogItem[] = [
  { title: "The YouTube Free Traffic System", image: "/assets/products/01.png", price: "$37", reviews: 142 },
  { title: "The Viral Prompt Pack", image: "/assets/products/02.png", price: "$47", reviews: 218 },
  { title: "The 7-Figure Funnel Vault", image: "/assets/products/03.png", price: "$97", reviews: 96 },
  { title: "The $10K Sale Engine", image: "/assets/products/04.png", price: "$67", reviews: 73 },
  { title: "The AI Cash Machine", image: "/assets/products/05.png", price: "$77", reviews: 184 },
  { title: "High-Converting Funnel Formulas", image: "/assets/products/06.png", price: "$47", reviews: 129 },
  { title: "The Words That Print Money", image: "/assets/products/07.png", price: "$37", reviews: 88 },
  { title: "The Ad Profit Machine", image: "/assets/products/08.png", price: "$57", reviews: 64 },
  { title: "Part-Time Millionaire Marketing Vault", image: "/assets/products/09.png", price: "Free", reviews: 312 },
  { title: "Successful Digital Strategies 2023", image: "/assets/products/10.png", price: "$27", reviews: 51 },
  { title: "Successful Digital Strategies 2022", image: "/assets/products/11.png", price: "$27", reviews: 47 },
  { title: "Funnel Strategic Guide", image: "/assets/products/12.png", price: "Free", reviews: 205 },
  { title: "AI Email Revenue Secrets", image: "/assets/products/13.png", price: "$37", reviews: 112 },
  { title: "The AI Content Cash System", image: "/assets/products/14.png", price: "$47", reviews: 76 },
  { title: "Fast-Selling Mini Offers Collection", image: "/assets/products/15.png", price: "$27", reviews: 38 },
  { title: "Digital Product Profit System", image: "/assets/products/16.png", price: "Free", reviews: 156 },
  { title: "The 6-Figure AI Course Formula", image: "/assets/products/17.png", price: "$97", reviews: 89 },
  { title: "The Faceless Viral Reels Vault", image: "/assets/products/18.png", price: "$57", reviews: 134 },
  { title: "The Viral Prompt Vault", image: "/assets/products/19.png", price: "$47", reviews: 67 },
  { title: "The Ultimate Digital Product Vault", image: "/assets/products/20.png", price: "$147", reviews: 41 },
  { title: "Digital Product Profit Key", image: "/assets/products/21.jpeg", price: "$37", reviews: 58 },
  { title: "The Part-Time Profits Pack", image: "/assets/products/22.png", price: "$47", reviews: 92 },
  { title: "The Fast Track Revenue Bundle", image: "/assets/products/23.png", price: "$67", reviews: 33 },
  { title: "AI Email Revenue Secrets — Email Kit", image: "/assets/products/24.png", price: "Free", reviews: 178 },
];

export function getCatalog(): CatalogItem[] {
  return CATALOG;
}
