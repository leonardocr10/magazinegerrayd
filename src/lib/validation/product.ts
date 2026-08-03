import { z } from "zod";

export const manualProductSchema = z.object({
  name: z.string().min(3, "Informe um nome com pelo menos 3 caracteres."),
  shortDescription: z
    .string()
    .min(10, "Adicione um resumo com no minimo 10 caracteres.")
    .max(180, "Use no maximo 180 caracteres."),
  price: z.coerce.number().positive("Informe um preco valido."),
  oldPrice: z.coerce.number().positive("Informe o preco anterior."),
  imageUrl: z.string().url("Adicione uma URL de imagem valida."),
  categorySlug: z.string().min(1, "Selecione a categoria."),
  marketplaceSlug: z.string().min(1, "Selecione o marketplace."),
  affiliateUrl: z.string().url("Informe um link de afiliado valido."),
  featured: z.boolean().default(false),
  dailyOffer: z.boolean().default(false),
  gerraydChoice: z.boolean().default(false),
});
