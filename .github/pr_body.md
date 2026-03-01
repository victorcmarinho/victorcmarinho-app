# Resumo das Implementações - Portfolio 2.0 (Astro)

Esta Pull Request adiciona a refatoração completa do portfólio anterior utilizando o moderno gerador de sites estáticos [Astro](https://astro.build/) em sua versão mais recente, com foco agressivo em performance, acessibilidade e SEO.

## ✨ O que há de novo?

1. **Migração & Componentização Astro:**
   - Todos os blocos (Hero, About, Projects, Experience, Skills, Footer) refatorados para a sintaxe limpa de componentes `.astro`.
   - Remoção de lixo de código morto do framework antigo.

2. **Progessive Web App (PWA) e Favicons:**
   - Ícone base do portal construído através de logo abstrata "VM" adaptativa.
   - PWA integrado por meio do plugin `@vite-pwa/astro` capaz de se autoinstalar em Mobile/Desktop.
   - `manifest.webmanifest` otimizado para a arquitetura WebP limitando peso.

3. **Tema Dark Mode e Light Mode Responsivo:**
   - Suporte nativo à preferência visual Dark/Light vinda do sistema do usuário (`prefers-color-scheme`).
   - Variáveis CSS acopladas e refletidas globalmente no novo framework do Tailwind.

4. **Performance Maximizada (WebP & Fontes):**
   - Transição unânime de todos os assets (`.png` e `.jpg`) para tamanhos hiper-otimizados em `.webp` (cortes absurdos como imagem de 52kB caindo para 3kB).
   - Motor `<Image>` native do Astro rodando `sharp` localmente.
   - Loading `async` e `preload` para webfonts para zerar penalidades no LCP (Largest Contentful Paint).

5. **Acessibilidade Severa (a11y):**
   - Atribuição intensa de ARIA roles, `aria-labelledby` e tags nativas.
   - Ajustes mobile para escala correta de Viewport sem bloqueios de uso através de leitor de telas.

6. **Integração Dinâmica (GitHub API & Contributions Chart):**
   - Os projetos mock/in-memory saíram de cena! A aba Projetos agora realiza SSG calls à `https://api.github.com/users/victorcmarinho` na build, listando dinamicamente os top 6 últimos Repositórios publicos atualizados no Github.
   - Gráfico do histórico Github (Green Contribution Calendar SVG) integrado como imagem otimizada de formato Full-width no rodapé de projetos.

7. **CI/CD Simplificado (GitHub Pages) & Selo RA:**
   - Pipeline de Github Action (`.github/workflows/deploy.yml`) instalada para automatizar via `pnpm` as builds do portfolio diretamente ao serviço de Hosting gratuita GitHub Pages em pushs na `main`.
   - Resgate com sucesso da tag isolada e criptografada do `Reclame Aqui Verificada` importada de volta ao final do rodapé (`Footer.astro`).

### Validação
- Totalmente aprovado pelo linter nativo `astro check`. Em deploy os Service Workers agirão em background para segurar cache sem impacto no frontend do usuário.
