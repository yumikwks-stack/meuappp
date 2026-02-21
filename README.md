# Como gerar o APK

Este projeto contém tudo o que você precisa para criar seu aplicativo Android.

## Opção 1: Build Automático no GitHub (Recomendado)
Como você pediu uma "plataforma de build", configuramos este projeto para usar o **GitHub Actions**.

1. Crie um novo repositório no GitHub.
2. Faça o upload de todos os arquivos desta pasta para lá.
3. Vá na aba **"Actions"** do seu repositório no GitHub.
4. Você verá um workflow chamado "Build Android APK" rodando.
5. Quando terminar (fica verde), clique nele e baixe o arquivo **app-debug** na seção "Artifacts".
6. Esse é o seu APK! Instale no seu Samsung.

## Opção 2: Build Manual (No seu PC)
Se preferir fazer no seu computador:

1. Instale Node.js e Android Studio.
2. Abra o terminal nesta pasta.
3. Rode `npm install`.
4. Rode `npx cap add android`.
5. Rode `npx cap open android` para abrir o Android Studio e compilar.
