````markdown
# RamenGo API

## Descrição

A RamenGo é uma API para uma aplicação web que permite aos usuários montar um pedido de ramen, escolhendo os tipos de caldos e proteínas do prato. A API fornece endpoints para listar as opções disponíveis e permitir que o usuário faça um pedido.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [Axios](https://github.com/axios/axios)

## Arquitetura

- **src**
  - **broths**
    - **controller**
      - `broths.controller.ts`
    - **services**
      - `broths.service.ts`
    - **entities**
      - `broth.entity.ts`
    - `broths.module.ts`
  - **orders**
    - **controller**
      - `orders.controller.ts`
    - **services**
      - `orders.service.ts`
    - `orders.module.ts`
    - **entities**
      - `order.entity.ts`
    - `dto`
      - `create-order.dto.ts`
  - **common**
    - `dtos`
      - `unauthorized-response.dto.ts`
    - `middlewares`
      - `api-key.middleware`
  - **config**
    - `typeorm.config.ts`
  - `app.module.ts`
  - `main.ts`

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```plaintext
API_KEY=9762dfaf-f55a-4f81-91c2-902aebe6d53c
REDVENTURES_API_KEY=ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf
REDVENTURES_API_URL='https://api.tech.redventures.com.br/orders/generate-id'
DB_LOGGING=true
DB_HOST=localhost
DB_PORT=5434
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=postgres

```
````

## Configuração do Docker

### docker-compose.yml

```yaml
version: '3'

services:
  postgres:
    image: postgres:latest
    container_name: ramengo
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - '5434:5432'
    volumes:
      - ./.postgres-data:/var/lib/postgresql/data

volumes:
  .postgres-data:
```

## Endpoints

### Broths

- **GET** `/broths` - Lista todos os caldos disponíveis.

### Proteins

- **GET** `/proteins` - Lista todos os caldos disponíveis.

### Orders

- **POST** `/orders` - Cria um novo pedido.
  - Body:
    ```json
    {
      "description": "Salt and Chasu Ramen",
      "image": "https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
    }
    ```

## Swagger

A documentação do Swagger está disponível em `http://localhost:3000/doc` após iniciar a aplicação.

## Executando a Aplicação

### Levante o banco de dados

```bash
docker-compose up
```

### Localmente

1. Instale as dependências:

   ```bash
   npm install or yarn install
   ```

2. Configure o banco de dados no `src/config/typeorm.config.ts`:

   ```typescript
   import { TypeOrmModuleOptions } from '@nestjs/typeorm';
   import { config } from 'dotenv';
   config();

   export const typeOrmConfig: TypeOrmModuleOptions = {
     type: 'postgres',
     host: process.env.DATABASE_HOST,
     port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
     username: process.env.DATABASE_USERNAME,
     password: process.env.DATABASE_PASSWORD,
     database: process.env.DATABASE_NAME,
     entities: [__dirname + '/../**/*.entity.{js,ts}'],
     synchronize: true,
   };
   ```

3. Execute a aplicação:

   ```bash
   npm run start:dev or yarn start:dev
   ```

### Populando o Banco de Dados com Seeds

1. Crie um arquivo `seed.ts` no diretório `src`:

   ```typescript
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module';
   import { getConnection } from 'typeorm';
   import { Broth } from './broths/broth.entity';

   async function bootstrap() {
     const app = await NestFactory.createApplicationContext(AppModule);
     const connection = getConnection();

     const broths = [
       { name: 'Shoyu', description: 'Soy sauce based', price: 5 },
       { name: 'Miso', description: 'Soybean paste based', price: 6 },
     ];

     await connection.getRepository(Broth).save(broths);

     await app.close();
   }

   bootstrap();
   ```

2. Execute o seed:

   ```bash
   ts-node src/seed.ts
   ```

## Hospedagem

A API está hospedada na [Render](https://render.com/). Para implantar na Render, siga a [documentação oficial](https://render.com/docs/deploy-nestjs).
