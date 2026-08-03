import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import { verifyPassword } from "@/lib/auth/password";

export async function authenticateAdmin(email: string, password: string) {
  try {
    const admin = await prisma.adminUser.findUnique({
      where: { email },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (admin && (await verifyPassword(password, admin.passwordHash))) {
      return {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.roles[0]?.role.slug ?? "administrator",
      };
    }
  } catch {
    // Fall back to bootstrap credentials while the database is not configured.
  }

  if (
    email === env.ADMIN_BOOTSTRAP_EMAIL &&
    password === env.ADMIN_BOOTSTRAP_PASSWORD
  ) {
    return {
      id: "bootstrap-admin",
      email: env.ADMIN_BOOTSTRAP_EMAIL,
      name: "Gerrayd",
      role: "administrator",
    };
  }

  return null;
}
