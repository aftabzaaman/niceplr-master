import type { MembershipTier } from "@/types";

const TIER_RANK: Record<MembershipTier, number> = {
  FREE: 0,
  PRO: 1,
  EXPERT: 2,
};

export function tierRank(tier: MembershipTier): number {
  return TIER_RANK[tier] ?? 0;
}

export function hasTier(
  userTier: MembershipTier,
  requiredTier: MembershipTier
): boolean {
  return tierRank(userTier) >= tierRank(requiredTier);
}

export function canAccessProduct(
  userTier: MembershipTier,
  productTier: MembershipTier,
  ownedProductIds: string[] = [],
  productId?: string
): boolean {
  if (productId && ownedProductIds.includes(productId)) {
    return true;
  }
  return hasTier(userTier, productTier);
}

export function canAccessCourse(
  userTier: MembershipTier,
  courseTier: MembershipTier
): boolean {
  return hasTier(userTier, courseTier);
}

export function canUseTool(
  userTier: MembershipTier,
  requiredTier: MembershipTier
): boolean {
  return hasTier(userTier, requiredTier);
}
