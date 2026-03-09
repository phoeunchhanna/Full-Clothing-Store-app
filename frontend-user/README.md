# Frontend User (Next.js)

Professional Customer Website for the **Full Clothing Store app**. This is the customer-facing part of a full-stack e-commerce ecosystem.

## 1. Introduction

Frontend Application សម្រាប់អតិថិជនប្រើប្រាស់៖

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Shadcn UI)
- **State Management:** Zustand
- **API Client:** Axios / React Query

### Responsibilities:

- Browse Products & Categories
- Select Variants (Size/Color)
- Add to Cart & Checkout (Simulation)
- View Order History & Manage Profile

---

## 2. Project Overview (Full Stack Context)

This application is part of a 3-tier architecture:

1.  **backend-api** (NestJS): Core logic, Database (Prisma/PostgreSQL), and API.
2.  **admin-panel** (Next.js): Management dashboard for products, orders, and users.
3.  **frontend-user** (Next.js): This repository - The premium shopping experience.

---

## 3. Getting Started

### 3.1 Prerequisite Commands

If you are setting this up from scratch:

```bash
npx create-next-app@latest frontend-user
```

### 3.2 Running the Application

```bash
cd frontend-user
npm run dev -- -p 3002
```

URL: [http://localhost:3002](http://localhost:3002)

### 3.3 Environment Variables (.env.local)

Ensure you point to the local backend API:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 4. Project Structure

```text
frontend-user
│
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── (auth)/         # Login, Register
│   │   ├── shop/           # Catalog browsing
│   │   ├── product/[id]/   # Dynamic product details
│   │   ├── cart/           # Shopping cart management
│   │   └── checkout/       # Order placement flow
│   ├── components/         # Reusable UI components
│   │   ├── product/        # ProductCard, Gallery
│   │   ├── cart/           # CartDrawer, CartItems
│   │   └── layout/         # Header, Footer, Sidebar
│   ├── services/           # API integration (Product, Order, Auth)
│   ├── store/              # Zustand global state (Cart, User)
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript definitions
└── public/                 # Static assets (Images, Icons)
```

---

## 5. System Workflow

1.  **Discovery**: User browses categories and products.
2.  **Interaction**: User selects specific size/color (ProductVariant).
3.  **Cart**: Items are managed locally with Zustand and persisted to LocalStorage/API.
4.  **Checkout**: User provides shipping info; application submits order to `backend-api`.
5.  **History**: User tracks order status via their profile dashboard.

---

## 6. Useful Packages

```bash
npm install axios zustand react-hook-form zod @hookform/resolvers lucide-react clsx tailwind-merge
```

---

## 7. Summary

The **frontend-user** application focuses on Visual Excellence and UX performance. It is designed to be fully responsive, SEO-friendly, and deeply integrated with the NestJS e-commerce backbone.
