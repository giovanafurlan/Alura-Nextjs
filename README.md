## Glossário Nextjs

- Static
    - Só vai usar o `next export`, em casos onde TUDO é pré-renderizado
    - `getStaticProps`: versão com menos recursos

- Static/SSG(Static Site Generation)
    - Por padrão
    - `getStaticProps`
        - `revalidade`: true [npm run build && npm start]
    - **Incremental Static Generation**
        - fallback: true || 'blocking' e o getStaticPaths vem vazio ou com somente alguns itens
 
- SSR(Server Side Render)
    - `getServerSideProps`
    - Se tiver dentro da pasta `/api` é uma API Route e é SSR