# Envio rápido ao GitHub

1. Crie um repositório **privado** no GitHub.
2. Clique em **Add file > Upload files**.
3. Arraste todos os arquivos da pasta do projeto, sem arrastar a pasta `node_modules`.
4. Clique em **Commit changes**.
5. Na Vercel, escolha **Add New > Project**, importe o repositório e configure `FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON` antes do deploy.

Nunca coloque o JSON da conta de serviço dentro do repositório. Ele deve ser colado somente em **Vercel > Project Settings > Environment Variables**.
