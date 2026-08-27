# Palestra Legado Protegido

Página de vendas desenvolvida para Rebeca Nascimento e a WS Planner.

## Informações básicas

O projeto apresenta a Palestra Legado Protegido, um encontro ao vivo sobre planejamento patrimonial familiar e empresarial. A implementação possui três comunicações de abertura e uma página de confirmação.

## Tecnologias

O site utiliza HTML semântico, CSS responsivo e JavaScript modular. Um gerador estático em Node.js produz os arquivos finais sem dependências externas de execução.

## Rotas

* `/a1`
* `/a2`
* `/a3`
* `/obrigado`

## Execução local

1. Execute `npm run build`.
2. Sirva a pasta `dist` com um servidor HTTP local.
3. Acesse uma das rotas disponíveis.

## Build

Execute `npm run check` para validar a sintaxe e `npm run build` para gerar a versão de produção na pasta `dist`.

## Checkout

O projeto aceita a variável `CHECKOUT_URL` no momento do build. Enquanto ela não estiver definida, os botões conduzem à oferta e o botão final permanece preparado, sem criar um destino fictício.
