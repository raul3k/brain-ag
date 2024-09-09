# Teste Técnico - Brain Agriculture
## Sobre
Teste de Node para Brain Agriculture, escrito com o framework Nest, Typeorm e Typescript.

O mesmo consiste em um cadastro de produtor rural com os seguintes dados:

1.  CPF ou CNPJ
2.  Nome do produtor
3.  Nome da Fazenda
4.  Cidade
5.  Estado
6.  Área total em hectares da fazenda
7.  Área agricultável em hectares
8.  Área de vegetação em hectares
9.  Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)

## Como rodar o projeto
A construção foi pensada em ser totalmente no Docker.
Para a estrutura inicial de banco de dados do projeto, executar os seguintes passos:
1. Dar permissão de execução para ./db/initial-data.sh
   1. chmod +x ./db/initial-data.sh
2. Executar o docker:
   1. docker compose up -d
3. Exeutar o comando abaixo para criar a estrutura do banco:
   1. ./db/initial-data.sh

Agora o projeto esta sendo executado em localhost na porta 3000.

## Rotas:
1. {/producers, POST}
2. {/producers, GET}
3. {/producers/:id, GET}
4. {/producers/:id, PATCH}
5. {/producers/:id, DELETE}
6. {/dashboard/total-farms-area, GET}
7. {/dashboard/farms-by-state, GET}
8. {/dashboard/farms-by-crop, GET}
9. {/dashboard/land-use, GET}

## Documentação
A documentação esta na url `/api`

## Tecnologias Utilizadas
 - Docker
 - NodeJS
 - Nest.JS
 - Typescript
 - TypeORM
 - Swagger

## Requisitos de negócio

- O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.
- O sistema deverá validar CPF e CNPJ digitados incorretamente.
- A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda
- Cada produtor pode plantar mais de uma cultura em sua Fazenda.
- A plataforma deverá ter um Dashboard que exiba:
    - Total de fazendas em quantidade
    - Total de fazendas em hectares (área total)
    - Gráfico de pizza por estado.
    - Gráfico de pizza por cultura.
    - Gráfico de pizza por uso de solo (Área agricultável e vegetação)

## Requisitos técnicos
- O desenvolvedor back-end deve:
    - Salvar os dados em um banco de dados Postgres usando o NodeJS como layer de Backend, e entregar os endpoints para cadastrar, editar, e excluir produtores rurais, além do endpoint que retorne os totais para o dashboard.
    - A criação das estruturas de dados "mockados" faz parte da avaliação.
