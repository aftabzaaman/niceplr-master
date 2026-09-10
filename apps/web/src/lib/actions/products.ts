"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProduct(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated." };

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  if (profile?.role !== "admin") return { error: "Not authorized." };

  const title = (formData.get("title") as string)?.trim();
  if (!title) return { error: "Title is required." };

  const slug =
    (formData.get("slug") as string)?.trim() ||
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const category = (formData.get("category") as string)?.trim() || null;
  const tier = (formData.get("tier") as string) || "FREE";
  const price = Number(formData.get("price") || 0);
  const image = (formData.get("image") as string)?.trim() || null;
  const description = (formData.get("description") as string)?.trim() || null;

  const { error } = await supabase.from("products").insert({
    title,
    slug,
    category,
    tier,
    price,
    image,
    description,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/products");
  redirect("/admin/products");
}
