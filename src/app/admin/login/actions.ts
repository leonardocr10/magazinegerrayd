"use server";

import { redirect } from "next/navigation";
import { authenticateAdmin } from "@/lib/auth/admin-auth";
import { createAdminSession } from "@/lib/auth/session";
import { loginSchema } from "@/lib/validation/auth";

export async function loginAdminAction(formData: FormData) {
  const payload = {
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  };

  const parsed = loginSchema.safeParse(payload);

  if (!parsed.success) {
    redirect("/admin/login?erro=validacao");
  }

  const admin = await authenticateAdmin(parsed.data.email, parsed.data.password);

  if (!admin) {
    redirect("/admin/login?erro=credenciais");
  }

  await createAdminSession(admin);
  redirect("/admin");
}
