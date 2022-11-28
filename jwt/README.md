## Access Token:
-  **Pra que serve?**
    - Pega qualquer tipo de informação do usuário
    - Atualizar...
    - Inserir ...
    - Deletar ...
- **Duração**
    - Dura pouco tempo/ 0 minimo possível
- **Risco se ele vazar**
    - Quanto maior o tempo de vida dele, maior o estrago que quem tiver o token pode fazer

## Refresh Token:
-  **Pra que serve?**
    - Literalmente, para não precisar pedir a senha e o usuário para gerae um novo access_token
- **Duração**
    - Duração dele é longa
    - O refresh token a nível de backend tá associado ao usuário de alguma forma
- **Risco se ele vazar**
    - Sele vazar, o usuário novo pode gerar token INFINITOS (access_token, refresh_token)
    - Precisa ter alguma forma de invalidar os refresh tokens