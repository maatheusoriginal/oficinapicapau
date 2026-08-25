# Pica Pau Motos — GitHub + Vercel, sem Cloud Functions

Este pacote contém o sistema em **Next.js**, as rotas administrativas executadas pela **Vercel** e as regras do Firestore. Ele não exige plano Blaze nem publicação de Cloud Functions.

## 1. Publicar primeiro no GitHub

1. Extraia o ZIP.
2. No GitHub, crie um repositório novo, de preferência **privado**.
3. Abra o repositório e escolha **Add file > Upload files**.
4. Envie o **conteúdo da pasta extraída**: `app`, `public`, `package.json`, `firebase.json` e os demais arquivos.
5. Confirme em **Commit changes**.

Não envie `node_modules`, `.next`, arquivos `.env`, credenciais de conta de serviço ou qualquer arquivo que contenha `private_key`. O pacote já possui regras no `.gitignore` para evitar esses arquivos.

## 2. Importar o GitHub na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new).
2. Conecte o GitHub e importe o repositório.
3. Mantenha o framework como **Next.js** e as demais opções automáticas.
4. Antes do primeiro deploy, abra **Environment Variables** e crie a variável obrigatória abaixo.

### Variável protegida obrigatória

Nome:

```text
FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON
```

Valor: o conteúdo completo do arquivo JSON de uma conta de serviço do Firebase.

Para obtê-lo, abra o Firebase Console e siga:

1. **Configurações do projeto** (ícone de engrenagem).
2. **Contas de serviço**.
3. **Gerar nova chave privada**.
4. Abra o JSON baixado, copie todo o conteúdo e cole como valor da variável na Vercel.

Marque a variável para **Production** e **Preview**. O nome não pode começar com `NEXT_PUBLIC_`, pois a chave deve existir apenas no servidor.

> Nunca envie o JSON da conta de serviço ao GitHub, ao chat ou para a pasta pública do site.

Opcionalmente, adicione:

```text
NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
```

Depois, clique em **Deploy**. Se a variável for adicionada após o deploy, use **Redeploy**.

## 3. Autorizar o domínio na autenticação

No Firebase Console, abra **Authentication > Configurações > Domínios autorizados** e adicione o domínio criado pela Vercel, sem `https://`, por exemplo:

```text
seu-projeto.vercel.app
```

## 4. Publicar apenas as regras do Firestore

Este passo funciona no plano gratuito Spark e não publica Functions. No Windows, execute `1_PUBLICAR_FIREBASE.bat`. Manualmente:

```bash
npm install -g firebase-tools
firebase login
firebase use oficinapicapaumotos34
firebase deploy --only "firestore:rules"
```

## 5. Teste final

1. Abra o endereço da Vercel e entre como Super Admin.
2. Vá a **Usuários e acessos**.
3. Clique em **Sincronizar Authentication**.
4. Confira criar usuário, editar permissões, alterar senha, desativar e apagar.

O backend confere o token do usuário e o documento `userAccess/{uid}`. Somente uma conta ativa com perfil `Super Admin` pode administrar usuários. Ronaldo (`USR-003`) recebe por padrão permissão para abrir OS; os demais mecânicos não recebem essa permissão automaticamente.

## Validação local opcional

Execute `2_PUBLICAR_VERCEL.bat` ou:

```bash
npm ci
npm run build
```

Para testar localmente as rotas administrativas, crie um `.env.local` com `FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON`. Esse arquivo é ignorado pelo Git e nunca deve ser publicado.
