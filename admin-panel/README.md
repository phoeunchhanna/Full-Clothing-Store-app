# Admin Panel (Next.js)

Professional Admin Dashboard for managing the Full Clothing Store app.

## 1. Introduction

Admin Panel សម្រាប់ Admin ដើម្បីគ្រប់គ្រងទិន្នន័យ៖

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** Zustand

### Responsibilities:

- Admin Login
- Manage Products & Categories
- Manage Orders & Customers
- Dashboard Reports & Statistics

---

## 2. Getting Started

### 2.1 Create Project

```bash
npx create-next-app@latest admin-panel
```

### 2.2 Run Admin Panel

```bash
cd admin-panel
npm run dev -- -p 3001
```

URL: `http://localhost:3001`

### 2.3 Environment Variables (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 3. Project Structure

```
admin-panel
│
├── src/
│   ├── app/
│   │   ├── (auth)/login
│   │   └── (dashboard)/users, categories, products, orders
│   ├── components/
│   │   ├── layout
│   │   ├── tables
│   │   └── forms
│   ├── services/ (api endpoints)
│   └── store/ (zustand)
```

---

## 4. Useful Packages

```bash
npm install axios zustand react-hook-form zod @hookform/resolvers lucide-react @tanstack/react-table recharts
```
