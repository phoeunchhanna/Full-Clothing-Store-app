# Frontend User (Next.js)

Professional Customer Website for the Full Clothing Store app.

## 1. Introduction

Frontend Application សម្រាប់អតិថិជនប្រើប្រាស់៖

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** Zustand

### Responsibilities:

- Browse Products & Categories
- Select Variants (Size/Color)
- Add to Cart & Checkout
- View Order History & Manage Profile

---

## 2. Getting Started

### 2.1 Create Project

```bash
npx create-next-app@latest frontend-user
```

### 2.2 Run Frontend User

```bash
cd frontend-user
npm run dev -- -p 3002
```

URL: `http://localhost:3002`

### 2.3 Environment Variables (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 3. Project Structure

```
frontend-user
│
├── src/
│   ├── app/
│   │   ├── shop
│   │   ├── product/[id]
│   │   ├── cart
│   │   └── checkout
│   ├── components/
│   │   ├── product
│   │   ├── cart
│   │   └── layout
│   └── services/ (api endpoints)
```

---

## 4. Useful Packages

```bash
npm install axios zustand react-hook-form zod @hookform/resolvers lucide-react
```
