export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string[];
};

const POSTS: BlogPost[] = [
  {
    slug: "digital-product-blueprint",
    title: "The Complete Digital Product Blueprint for Beginners",
    excerpt:
      "Learn the fundamentals of creating, packaging, and launching digital assets from scratch.",
    category: "Getting Started",
    date: "2026-06-15",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
    content: [
      "Building a digital product business is one of the most accessible ways to earn online. You don't need inventory, shipping, or a large team to get started.",
      "The key is to solve a specific problem for a specific audience. Start by identifying a niche you understand and a pain point you can solve better than existing options.",
      "Once you have your idea, validate it before you build. Talk to potential customers, study competitors, and confirm there is real demand.",
      "Finally, package your knowledge into a product people can consume immediately — a guide, template, checklist, or course.",
    ],
  },
  {
    slug: "sales-funnel-masterclass",
    title: "High-Converting Sales Funnels: A Step-by-Step Guide",
    excerpt:
      "A deep dive into landing page psychology, hooks, and automated email follow-ups.",
    category: "Marketing",
    date: "2026-05-20",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    content: [
      "A sales funnel is simply the journey a visitor takes from first contact to purchase. The better you map this journey, the more you sell.",
      "Start with a strong hook. Your headline must immediately communicate the transformation your product delivers.",
      "Build trust with social proof, clear benefits, and a simple call to action. Remove distractions from the page.",
      "Automate follow-up with email sequences that educate and nurture leads until they are ready to buy.",
    ],
  },
  {
    slug: "ai-content-creation",
    title: "Scaling Your Content with AI Product Assets",
    excerpt:
      "Leverage modern AI tools to generate, refine, and deploy premium assets at scale.",
    category: "Artificial Intelligence",
    date: "2026-04-12",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1200&q=80",
    content: [
      "AI tools have changed how digital products are created. What once took weeks can now be done in hours.",
      "Use AI to brainstorm ideas, draft content, and generate visuals — but always review and refine the output.",
      "Your unique positioning and expertise are what make an AI-assisted product valuable. The tool accelerates the work; you provide the insight.",
      "Combine AI-generated assets with your own knowledge to create products that are both fast to produce and genuinely useful.",
    ],
  },
];

export function getPosts(): BlogPost[] {
  return POSTS;
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}
