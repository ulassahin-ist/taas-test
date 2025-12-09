# 🛍️ The Taas Company Case – E-Commerce Frontend

\*A pixel-perfect, mobile-first Nuxt project by **Ulaş Şahin\***

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ulassahin-ist.github.io/taas-test/)
[![GitHub](https://img.shields.io/badge/github-repository-blue)](https://github.com/ulassahin-ist/taas-test)

---

## 📋 Overview

A responsive e-commerce website built as a technical case study for **The Taas Company**.

**Key Features:**

- ✅ Mobile-first responsive design
- ✅ Pixel-perfect Figma implementation
- ✅ Dynamic product fetching (DummyJSON API)
- ✅ **Bonus:** Complete checkout flow
- ✅ Custom hub page with interactive previews

**Tech Stack:** Nuxt 3 · Vue 3 · Pure CSS · JS- DummyJSON API

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/ulassahin-ist/taas-test
cd taas-test

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run generate
```

**Live Demo:** https://ulassahin-ist.github.io/taas-test/

---

## ✅ Requirements Fulfilled

| Requirement        | Status | Implementation                                    |
| ------------------ | ------ | ------------------------------------------------- |
| Version Control    | ✅     | Meaningful commit history (15+ commits)           |
| HTML/CSS/JS        | ✅     | Semantic HTML, CSS variables, Vue Composition API |
| Responsive Design  | ✅     | Mobile-first, breakpoints: 768px, 480px           |
| Vue + Nuxt         | ✅     | Nuxt 3, auto-imports, composables                 |
| REST API           | ✅     | DummyJSON via `useProducts` composable            |
| Deployment         | ✅     | GitHub Pages (static SPA)                         |
| **Bonus Checkout** | ✅     | Forms, validation, cart summary                   |

---

## 🎨 Design Decisions

### Pure CSS Architecture

No UI frameworks (no Tailwind, Bootstrap, etc.) to ensure:

- Pixel-perfect accuracy
- Full responsive control
- Lightweight output

### CSS Variables System

```css
:root {
  --primary: #ff27ad;
  --secondary: #0099a8;
  --radius-sm: 4px;
  --radius-md: 6px;
  /* ... */
}
```

### Component Naming Convention

```
[component]-section
[component]-content
[component]-title
[component]-card
```

---

## 📁 Project Structure

```
taas-test/
├── assets/
│   └── css/
│       └── global.css          # Global styles and CSS variables
├── components/
│   ├── Banner.vue              # Promotional banner
│   ├── CategoryCard.vue        # Category display card
│   ├── CheckoutCart.vue        # Shopping cart summary
│   ├── FeaturedCategories.vue  # Categories section
│   ├── FeaturedProducts.vue    # Products section
│   ├── Footer.vue              # Site footer with mobile accordion
│   ├── Header.vue              # Navigation header with mobile menu
│   ├── Hero.vue                # Homepage hero section
│   ├── NewsletterSignUp.vue    # Newsletter form
│   ├── PaymentDetails.vue      # Payment form
│   ├── ProductCard.vue         # Product display card
│   └── ShippingDetails.vue     # Shipping form
├── composables/
│   └── useProducts.js          # Product data fetching logic
├── pages/
│   ├── index.vue               # Landing/hub page
│   ├── homepage.vue            # Main e-commerce page
│   └── checkout.vue            # Checkout page
├── public/                     # Static assets (images, icons)
├── nuxt.config.ts             # Nuxt configuration
└──package.json
```

---

## 🎯 Key Features

### Homepage

- Hero banner with responsive images
- Featured products (API-driven)
- Featured categories
- Promotional banner
- Newsletter signup
- Mobile navigation with scroll lock

### Checkout Page (Bonus)

- Shipping details form
- Payment information
- Shopping cart summary
- Responsive split layout

### Hub Page (Custom Addition)

Interactive landing page with:

- Phone frame previews of both pages
- Embedded iframe navigation
- Direct page links

_Note: Hub page was my addition to enhance presentation, not part of requirements._

---

## 🛠️ Technical Highlights

### API Integration

```javascript
// composables/useProducts.js
export const useProducts = () => {
  const getProducts = async (limit, skip) => {
    const { data, error } = await useFetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    return data.value?.products || [];
  };
  return { getProducts };
};
```

### Mobile Menu Scroll Lock

```javascript
watch(isMenuOpen, (open) => {
  if (open) {
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }
});
```

### Static Deployment

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: "/taas-test/",
  },
  ssr: false,
  nitro: { preset: "static" },
});
```

---

## 📐 Pixel-Perfect Implementation

- ✅ Exact Figma measurements replicated
- ✅ Proper font weights and letter-spacing
- ✅ Accurate shadows and borders
- ✅ Correct placeholder states
- ✅ Hover effects and transitions
- ✅ Mobile menu slide animations
- ✅ **Fixed Figma design errors** (banner height collision)

---

## 🌐 Deployment

**Platform:** GitHub Pages  
**Build:** Static SPA  
**URL:** https://ulassahin-ist.github.io/taas-test/

---

## 👤 Author

**Ulaş Şahin**

[![GitHub](https://img.shields.io/badge/GitHub-ulassahin--ist-black?logo=github)](https://github.com/ulassahin-ist)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ulas--sahin--ist-blue?logo=linkedin)](https://www.linkedin.com/in/ulas-sahin-ist/)

---

**Thank you for reviewing this project!** 🙏
