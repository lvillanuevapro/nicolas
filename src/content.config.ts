import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const columnas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/columnas' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    descripcion: z.string(),
    tipo: z.enum(['columna', 'enlace']).default('columna'),
    fuente: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { columnas };
