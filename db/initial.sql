GRANT ALL PRIVILEGES ON DATABASE agro TO postgres;

create table producers
(
    id              serial
        constraint "PK_7f16886d1a44ed0974232b82506"
            primary key,
    document        varchar                 not null
        constraint "UQ_55554aac38152436aa25b1e3530"
            unique,
    name            varchar                 not null,
    farm_name       varchar                 not null,
    city            varchar                 not null,
    state           varchar                 not null,
    hectares        integer                 not null,
    arable_area     integer                 not null,
    vegetation_area integer                 not null,
    created_at      timestamp default now() not null,
    updated_at      timestamp default now() not null
);

alter table producers
    owner to postgres;

INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (26, '09042287000197', 'Livia Ferreira Martins', 'Fazenda de Sol Nascente 2', 'Caxias do Sul', 'Rio Grande do Sul', 800, 700, 150, '2024-09-09 16:02:51.528720', '2024-09-09 16:02:51.528720') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (25, '87028957063', 'Chicó', 'Fazenda de Serra Talhada', 'Cabaceiras', 'Paraíba', 430, 400, 30, '2024-09-09 15:35:37.444916', '2024-09-09 15:35:37.444916') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (27, '26507064000177', 'Brenda Azevedo Rodrigues', 'Fazenda Encruzilhada', 'Recife', 'Pernambuco', 535, 470, 20, '2024-09-09 16:03:48.441009', '2024-09-09 16:03:48.441009') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (28, '15018486406', 'Antônio Cunha Oliveira', 'Fazenda Lua Brilhante', 'Olinda', 'Pernambuco', 900, 800, 95, '2024-09-09 16:19:52.556640', '2024-09-09 16:19:52.556640') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (29, '91684071658', 'Fernanda Gomes Cunha', 'Fazenda Tupinamba', 'Itapetininga', 'São Paulo', 750, 630, 100, '2024-09-09 16:22:42.481887', '2024-09-09 16:22:42.481887') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (31, '67999145718', 'Luiza Melo Souza', 'Fazenda Vicente Matallo', 'Campinas', 'São Paulo', 750, 630, 100, '2024-09-09 16:24:21.095193', '2024-09-09 16:24:21.095193') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (30, '60637756762', 'Miguel Goncalves Cardoso', 'Fazenda Tupinamba', 'Catalão', 'Goiás', 750, 630, 100, '2024-09-09 16:23:32.553879', '2024-09-09 16:23:32.553879') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (32, '49175996600', 'Felipe Correia Oliveira', 'Fazenda Olívia Batista Assunção', 'Goiânia', 'Goiás', 750, 630, 100, '2024-09-09 16:25:40.936012', '2024-09-09 16:25:40.936012') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (33, '59169424276', 'Paulo Barbosa Ribeiro', 'Fazenda Sete', 'Nova Iguaçu', 'Rio de Janeiro', 750, 630, 100, '2024-09-09 16:26:44.823011', '2024-09-09 16:26:44.823011') ON CONFLICT DO NOTHING ;
INSERT INTO producers (id, document, name, farm_name, city, state, hectares, arable_area, vegetation_area, created_at, updated_at) VALUES (34, '57565696420', 'Vitória Alves Cunha', 'Fazenda Brilhante', 'Serra', 'Espirito Santo', 750, 630, 100, '2024-09-09 16:27:39.412715', '2024-09-09 16:27:39.412715') ON CONFLICT DO NOTHING ;


create table crops
(
    id   serial
        constraint "PK_098dbeb7c803dc7c08a7f02b805"
            primary key,
    name varchar not null
);

alter table crops
    owner to postgres;

INSERT INTO crops (id, name) VALUES (1, 'Soja')  ON CONFLICT DO NOTHING ;
INSERT INTO crops (id, name) VALUES (2, 'Milho') ON CONFLICT DO NOTHING ;
INSERT INTO crops (id, name) VALUES (3, 'Algodão') ON CONFLICT DO NOTHING ;
INSERT INTO crops (id, name) VALUES (4, 'Café') ON CONFLICT DO NOTHING ;
INSERT INTO crops (id, name) VALUES (5, 'Cana de Açucar') ON CONFLICT DO NOTHING ;


create table producers_crops_crops
(
    "producersId" integer not null
        constraint "FK_09ecda4d7ecb36d8a88d998918d"
            references producers
            on update cascade on delete cascade,
    "cropsId"     integer not null
        constraint "FK_796ae36624bbbc3d035a8aee9fb"
            references crops
            on update cascade on delete cascade,
    constraint "PK_66893b3024961353eaaaeaa1928"
        primary key ("producersId", "cropsId")
);

alter table producers_crops_crops
    owner to postgres;

create index "IDX_09ecda4d7ecb36d8a88d998918"
    on producers_crops_crops ("producersId");

create index "IDX_796ae36624bbbc3d035a8aee9f"
    on producers_crops_crops ("cropsId");

INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (25, 1) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (25, 2) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (25, 3) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (26, 4) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (26, 5) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (27, 4) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
INSERT INTO producers_crops_crops ("producersId", "cropsId") VALUES (27, 5) ON CONFLICT ("cropsId", "producersId") DO NOTHING ;
