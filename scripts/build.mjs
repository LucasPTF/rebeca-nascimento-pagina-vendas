import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { heroVariants } from '../src/content.mjs';
import { renderSalesPage, renderThankYouPage } from '../src/components.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const styles = await readFile(path.join(root, 'src', 'styles.css'), 'utf8');
const client = await readFile(path.join(root, 'src', 'client.js'), 'utf8');

const checkoutValue = process.env.CHECKOUT_URL?.trim() ?? '';
let checkoutUrl = '';

if (checkoutValue) {
  const parsed = new URL(checkoutValue);
  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('CHECKOUT_URL precisa usar http ou https.');
  }
  checkoutUrl = parsed.toString();
}

const documentShell = ({ content, pageType = 'sales' }) => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#351017">
  <meta name="description" content="Palestra Legado Protegido com Rebeca Nascimento. Clareza para observar riscos patrimoniais, familiares, societários e sucessórios antes de escolher qualquer estrutura.">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Palestra Legado Protegido | Rebeca Nascimento">
  <meta property="og:description" content="Entenda o que merece atenção antes de tomar decisões sobre o futuro do patrimônio da sua família.">
  <meta property="og:image" content="/images/rebeca-hero.png">
  <title>${pageType === 'thanks' ? 'Obrigada pela inscrição' : 'Palestra Legado Protegido'} | Rebeca Nascimento</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="page-${pageType}">
  ${content}
  <script src="/client.js" defer></script>
</body>
</html>`;

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, 'public'), dist, { recursive: true });
await writeFile(path.join(dist, 'styles.css'), styles, 'utf8');
await writeFile(path.join(dist, 'client.js'), client, 'utf8');

for (const [route, hero] of Object.entries(heroVariants)) {
  const directory = path.join(dist, route);
  await mkdir(directory, { recursive: true });
  await writeFile(
    path.join(directory, 'index.html'),
    documentShell({ content: renderSalesPage(hero, checkoutUrl) }),
    'utf8'
  );
}

const thanksDirectory = path.join(dist, 'obrigado');
await mkdir(thanksDirectory, { recursive: true });
await writeFile(
  path.join(thanksDirectory, 'index.html'),
  documentShell({ content: renderThankYouPage(), pageType: 'thanks' }),
  'utf8'
);

console.log('Build concluído: /a1, /a2, /a3 e /obrigado.');
