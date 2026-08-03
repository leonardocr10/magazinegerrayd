/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { hash } from "bcryptjs";
import { PrismaClient, UserStatus } from "../src/generated/prisma/client";

const prisma = new PrismaClient({});

async function main() {
  const passwordHash = await hash(
    process.env.ADMIN_BOOTSTRAP_PASSWORD ?? "TroquePorUmaSenhaSegura123!",
    10,
  );

  const role = await prisma.role.upsert({
    where: { slug: "administrator" },
    update: {},
    create: {
      name: "Administrador",
      slug: "administrator",
      description: "Acesso total ao painel do Magazine Gerrayd.",
    },
  });

  const admin = await prisma.adminUser.upsert({
    where: {
      email: process.env.ADMIN_BOOTSTRAP_EMAIL ?? "admin@magazinegerrayd.com.br",
    },
    update: {
      passwordHash,
      status: UserStatus.ACTIVE,
      isSuperAdmin: true,
    },
    create: {
      name: "Gerrayd",
      email: process.env.ADMIN_BOOTSTRAP_EMAIL ?? "admin@magazinegerrayd.com.br",
      passwordHash,
      isSuperAdmin: true,
      status: UserStatus.ACTIVE,
    },
  });

  await prisma.adminUserRole.upsert({
    where: {
      adminUserId_roleId: {
        adminUserId: admin.id,
        roleId: role.id,
      },
    },
    update: {},
    create: {
      adminUserId: admin.id,
      roleId: role.id,
    },
  });

  const marketplaces = [
    {
      name: "Amazon",
      slug: "amazon",
      baseUrl: "https://www.amazon.com.br",
      affiliateIdentifier: process.env.AMAZON_AFFILIATE_TAG ?? "",
    },
    {
      name: "Shopee",
      slug: "shopee",
      baseUrl: "https://shopee.com.br",
      affiliateIdentifier: process.env.SHOPEE_AFFILIATE_ID ?? "",
    },
    {
      name: "Mercado Livre",
      slug: "mercado-livre",
      baseUrl: "https://www.mercadolivre.com.br",
      affiliateIdentifier: process.env.MERCADO_LIVRE_AFFILIATE_ID ?? "",
    },
    {
      name: "Magalu",
      slug: "magalu",
      baseUrl: "https://www.magazinevoce.com.br",
      affiliateIdentifier: process.env.MAGALU_AFFILIATE_ID ?? "",
    },
  ];

  for (const marketplace of marketplaces) {
    await prisma.marketplace.upsert({
      where: { slug: marketplace.slug },
      update: marketplace,
      create: marketplace,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
