# Backend API (NestJS)

Professional NestJS API Server with Prisma and PostgreSQL for the Full Clothing Store app.

## 1. Introduction

ឯកសារនេះពន្យល់អំពីការរៀបចំ Backend API ដែលប្រើប្រាស់៖

- **Framework:** NestJS
- **ORM:** Prisma
- **Database:** PostgreSQL

### Responsibilities:

- Authentication & User Management
- Category & Product Management
- Cart & Order Management
- Payment Logic & File Upload
- Dashboard Statistics

---

## 2. Getting Started

### 2.1 Create Project

```bash
npm install -g @nestjs/cli
nest new backend-api --package-manager npm
```

### 2.2 Run Backend

```bash
cd backend-api
npm run start:dev
```

URL: `http://localhost:3000`

---

## 3. Database & Prisma Setup

### 3.1 Install Prisma

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

### 3.2 Environment Variables (.env)

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/ecommerce"
PORT=3000
JWT_SECRET=supersecret
JWT_EXPIRE=7d
```

### 3.3 Migration Commands

```bash
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio
```

---

## 4. Project Structure

```
backend-api
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── modules/ (auth, users, categories, products, etc.)
│   ├── common/ (guards, decorators, filters, pipes)
│   ├── config/ (app settings)
│   └── database/ (prisma service)
```

### Modules List:

- `auth`, `users`, `categories`, `products`, `cart`, `orders`, `payments`, `uploads`, `dashboard`

---

## 5. API Endpoints (Example)

- `POST   /auth/login`
- `GET    /users/profile`
- `GET    /categories`
- `GET    /products`
- `POST   /orders`
- `PATCH  /orders/:id/status`

---

## 6. Useful Packages

```bash
npm install @nestjs/config @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt class-validator class-transformer @nestjs/swagger swagger-ui-express @nestjs/platform-express multer
```
