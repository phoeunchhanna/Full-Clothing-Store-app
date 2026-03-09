# Full Clothing Store app

Professional Full Stack E-commerce Architecture using **NestJS**, **Next.js**, **Prisma**, and **PostgreSQL**.

## 1. Introduction

ឯកសារនេះបង្កើតឡើងសម្រាប់ពន្យល់អំពីការរៀបចំ Full Stack Project មួយដែលប្រើប្រាស់បច្ចេកវិទ្យា៖

- **Backend:** NestJS
- **Admin Panel:** Next.js
- **Frontend User:** Next.js
- **ORM:** Prisma
- **Database:** PostgreSQL

Project នេះសមស្របសម្រាប់ E-commerce Store ជាពិសេស Clothing Store ដែលត្រូវការគ្រប់គ្រង Users, Products, Categories, Cart, Orders, និង Payments.

---

## 2. Project Overview

Project នេះគឺជា Full Stack Application ដែលមាន 3 Applications សំខាន់ៗ៖

1. **backend-api** = NestJS API Server
2. **admin-panel** = Next.js Admin Dashboard
3. **frontend-user** = Next.js Customer Website

### Project Structure

```
Full-Clothing-Store-app
│
├── backend-api (NestJS API)
│   ├── src/
│   │   ├── modules/ (auth, users, products, etc.)
│   │   ├── common/ (guards, decorators, filters)
│   │   └── database/ (prisma service)
│   └── prisma/ (schema & migrations)
│
├── admin-panel (Next.js Dashboard)
│   ├── src/
│   │   ├── app/ (dashboard pages)
│   │   ├── components/ (ui, tables, forms)
│   │   └── services/ (api calls)
│   └── public/
│
└── frontend-user (Next.js Customer App)
    ├── src/
    │   ├── app/ (shop, cart, checkout pages)
    │   ├── components/ (product cards, layout)
    │   └── services/ (api calls)
    └── public/
```

---

## 3. Getting Started

### 3.1 Commands to Create Project

**Backend API (NestJS):**

```bash
npm install -g @nestjs/cli
nest new backend-api --package-manager npm
```

**Admin Panel (Next.js):**

```bash
npx create-next-app@latest admin-panel
```

**Frontend User (Next.js):**

```bash
npx create-next-app@latest frontend-user
```

### 3.2 Running the Projects

Open 3 separate terminals:

**I. Run Backend:**

```bash
cd backend-api
npm run start:dev
```

URL: `http://localhost:3000`

**II. Run Admin Panel:**

```bash
cd admin-panel
npm run dev -- -p 3001
```

URL: `http://localhost:3001`

**III. Run Frontend User:**

```bash
cd frontend-user
npm run dev -- -p 3002
```

URL: `http://localhost:3002`

---

## 4. Prisma Setup & Database

**Install Prisma:**

```bash
cd backend-api
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

**Migration Commands:**

```bash
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio # Open GUI to view data
```

---

## 5. Backend Architecture (NestJS)

### Modules Generated:

- `auth`, `users`, `categories`, `products`, `cart`, `orders`, `payments`, `uploads`, `dashboard`

### Common Backend Packages:

```bash
npm install @nestjs/config @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt class-validator class-transformer @nestjs/swagger swagger-ui-express @nestjs/platform-express multer
```

---

## 6. API Module List (Endpoints)

- `POST /auth/login`
- `POST /auth/register`
- `GET /users/profile`
- `GET /categories`
- `GET /products`
- `GET /cart`
- `POST /orders`
- `PATCH /orders/:id/status`

---

## 7. Summary

Project នេះគឺជា Professional Full Stack E-commerce Architecture ដែលមាន structure ច្បាស់លាស់ ងាយស្រួល scale និង maintain។

**Advantages:**

- Prisma ងាយគ្រប់គ្រង database
- Next.js ល្អសម្រាប់ UI/UX
- NestJS ល្អសម្រាប់ API architecture
- សមស្របសម្រាប់ Team Development
