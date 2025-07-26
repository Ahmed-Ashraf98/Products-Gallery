import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'main/products',
    renderMode: RenderMode.Server,
  },

  {
    path: 'main/products/:id',
    renderMode: RenderMode.Server,
  },

  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
