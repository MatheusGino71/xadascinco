🚀 QUICK START - XÁ DAS CINCO
=============================

## Passo 1: Abra o Terminal

```bash
cd c:\Users\adm\OneDrive\Área\ de\ Trabalho\PROJETOS\xa_das_cinco_new
```

## Passo 2: Instale as Dependências

```bash
npm install
```

Isso vai baixar React, Vite, Tailwind e todas as dependências.

## Passo 3: Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

Você verá algo como:
```
  VITE v5.4.10  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Abra seu navegador em `http://localhost:5173/` e voque verá o site funcionando!

---

## Para Produção

Quando quiser fazer o build para deploy:

```bash
npm run build
```

Isso vai gerar uma pasta `dist/` com todos os arquivos otimizados prontos para upload.

---

## Customizações Rápidas

### Alterar Nome/Email/Telefone
Abra `src/App.jsx` e procure por:
- `+5511999999999` (telefone)
- `hello@xadascinco.com` (email)
- Altere para seus dados

### Alterar Imagens
Procure por `https://images.unsplash.com/` em `src/App.jsx`
Substitua as URLs por:
- Suas próprias imagens
- Outros links do Unsplash
- CDN (Cloudinary, etc)

### Alterar Cores de Marca
Edite `tailwind.config.js`:
```javascript
colors: {
  'xd-light': '#F4F3F2',      // Mude aqui
  'xd-gold': '#C4B09D',        // Mude aqui
  'xd-taupe': '#8C8A82',       // Mude aqui
  'xd-charcoal': '#504D4B',    // Mude aqui
}
```

### Alterar Nomes das Seções
Procure no `src/App.jsx`:
- "Nossas Expertises"
- "Nossa Metodologia"
- "Cases & Campanhas"
- "Project Briefing"

E altere conforme necessário.

---

## Conectar o Formulário

O formulário atualmente não envia dados. Para conectar:

### Opção 1: EmailJS (Recomendado para iniciantes)
1. Acesse https://www.emailjs.com
2. Crie uma conta grátis
3. Siga a documentação para integrar
4. Adicione ao `src/App.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleBriefingSubmit = async (e) => {
  e.preventDefault();
  
  await emailjs.send('service_id', 'template_id', briefingForm);
  alert('Briefing enviado!');
  setBriefingForm({ name: '', brand: '', budget: '', message: '' });
};
```

### Opção 2: Formspree
1. Acesse https://formspree.io
2. Crie um form
3. Apenas altere o action do form

### Opção 3: Backend Próprio
Crie um endpoint POST em seu servidor que receba:
```json
{
  "name": "string",
  "brand": "string", 
  "budget": "string",
  "message": "string"
}
```

---

## Deploy (Escolha uma opção)

### Vercel (Mais fácil)
```bash
npm install -g vercel
vercel
```

Siga as instruções. Pronto em 2 minutos!

### Netlify
1. Acesse https://netlify.com
2. Conecte seu GitHub
3. Selecione a branch
4. Configure build: `npm run build`
5. Output: `dist`

### GitHub Pages
```bash
npm run build
git add .
git commit -m "deploy"
git push origin main
```

---

## Precisa de Ajuda?

- Erro de import? → Verifique se `npm install` completou
- Site não carrega? → Verifique a URL: `http://localhost:5173/`
- Variáveis de ambiente? → Crie `.env.local` na raiz
- Iconify-icon não carrega? → Pode ser problema de internet

---

## Estrutura de Pastas Explicada

```
src/
├── App.jsx          ← COMPONENTE PRINCIPAL
├── main.jsx         ← ENTRY POINT
└── index.css        ← ESTILOS GLOBAIS

index.html           ← HTML BASE
tailwind.config.js   ← CONFIG DE CORES
package.json         ← DEPENDÊNCIAS

CUSTOMIZATION_GUIDE.md    ← LEIA ISTO para customizar
REFACTORING_SUMMARY.md    ← Ve isto para entender a refactoring
README.md                 ← Documentação rápida
```

---

## Dicas Pro

✅ Use `git` para versionamento
✅ Comprima imagens antes de usar (tinypng.com)
✅ Teste em mobile (F12 → Toggle device toolbar)
✅ Use o DevTools para debugar CSS
✅ Leia CUSTOMIZATION_GUIDE.md para detalhes

---

## Passos Próximos

1. [ ] Instalar dependências (npm install)
2. [ ] Rodar servidor local (npm run dev)
3. [ ] Abrir no navegador (http://localhost:5173/)
4. [ ] Customizar dados (email, phone, images)
5. [ ] Conectar formulário (EmailJS ou backend)
6. [ ] Testar em mobile
7. [ ] Fazer build (npm run build)
8. [ ] Deploy

---

Tudo pronto! 🎉 Bora começar?
