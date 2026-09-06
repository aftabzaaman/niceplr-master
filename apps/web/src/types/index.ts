export type MembershipTier = "FREE" | "PRO" | "EXPERT";

export type Product = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  price?: number;
  tier: MembershipTier;
  category?: string;
  format?: string;
};

export type ProductFile = {
  id: string;
  productId: string;
  fileName: string;
  storageKey: string;
  fileSize: number;
  version: string;
};

export type CourseLesson = {
  title: string;
  videoUrl: string;
  duration: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  tier: MembershipTier;
  duration?: string;
  lessonsCount?: number;
  lessons?: CourseLesson[];
};

export type UserProfile = {
  id: string;
  membership_tier: MembershipTier;
  full_name?: string;
};
