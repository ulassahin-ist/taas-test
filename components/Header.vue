<template>
  <header class="header flex column">
    <div class="header-top flex center">
      <div class="container flex center">
        <div class="header-nav flex grow gap-8">
          <button class="flex center header-top-button">
            <img src="/icons/store.svg" />Stores
          </button>
          <button class="flex center header-top-button">
            <img src="/icons/catalog.svg" />Catalog
          </button>
        </div>
        <div class="desktop header-top-text">
          Watsons Beauty and Personal Care Awards Nominees!
        </div>
        <div class="header-contact gap-8 grow">
          <div class="phone flex center gap-8">
            <div class="desktop">Call us:(+90) 850 123 45 67</div>
            <img src="/icons/phone-white.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="header-main flex center container">
      <img
        class="logo"
        src="/logo.png"
        alt="Logo"
        @click="navigateTo('/homepage')"
      />
      <div class="header-actions grow flex center flex-end">
        <div class="search desktop">
          <img src="/icons/search-light.svg" class="search-icon" />
          <input
            type="text"
            placeholder="Write the product or category you are looking for"
          />
        </div>
        <div class="user desktop flex center">
          <p>Hello,&nbsp;<strong>Clara Clara</strong></p>
          <img class="avatar" src="/avatar.png" alt="Avatar" />
          <img style="cursor: pointer" src="/icons/down-light.svg" alt="Drop" />
        </div>

        <div class="divider-vertical desktop"></div>

        <div class="header-action-button mobile">
          <img src="/icons/search.svg" alt="Search" />
        </div>
        <div class="header-action-button" @click="navigateTo('/checkout')">
          <img src="/icons/basket.svg" alt="Basket" />
          <div class="desktop" style="color: white">.</div>
          <div class="header-basket-counter flex center">{{ basketCount }}</div>
        </div>
        <div class="header-action-button mobile">
          <img
            style="cursor: pointer"
            src="/icons/hamburger.svg"
            alt="Basket"
            @click="openMenu"
          />
        </div>
      </div>
    </div>
    <div class="menu">
      <!-- Desktop Menu -->
      <div class="desktop flex container menu-desktop">
        <button
          v-for="category in categories"
          :key="category.id + '-desktop'"
          class="menu-item"
        >
          {{ category.label }}
        </button>
      </div>
      <div
        class="menu-overlay mobile"
        :class="{ 'menu-overlay--open': isMenuOpen }"
      >
        <div class="menu-mobile-header">
          <button class="menu-mobile-close" @click="closeMenu">
            <img src="/icons/close.svg" alt="Close" />
          </button>
          <span class="menu-mobile-title">Menu</span>
        </div>

        <div class="menu-pages">
          <!-- Mobile Categories -->
          <div
            class="menu-page menu-page-root"
            :class="{ 'menu-page-root--hidden': activeCategory }"
          >
            <div class="menu-mobile-list">
              <template v-for="category in categories" :key="category.id">
                <button
                  v-if="category.id !== 'men-care'"
                  class="menu-mobile-item"
                  @click="openCategory(category)"
                >
                  <span class="menu-mobile-arrow flex center"
                    ><img src="/icons/left.svg"
                  /></span>
                  <span>{{ category.label }}</span>
                </button>
              </template>
            </div>
            <ul class="menu-mobile-settings">
              <li class="menu-mobile-item menu-mobile-setting">
                My profile <img src="/icons/profile.svg" />
              </li>
              <li class="menu-mobile-item menu-mobile-setting">
                Order History<img src="/icons/order.svg" />
              </li>
              <li class="menu-mobile-item menu-mobile-setting">
                Help Center<img src="/icons/help.svg" />
              </li>
              <li class="menu-mobile-item menu-mobile-setting">
                Log out<img src="/icons/logout.svg" />
              </li>
            </ul>
          </div>

          <!-- Mobile Sub Categories -->
          <div
            class="menu-page menu-page-detail"
            :class="{ 'menu-page-detail--visible': activeCategory }"
          >
            <button
              class="menu-mobile-back menu-mobile-subheader"
              @click="backToRoot"
            >
              <span>{{ activeCategory?.label }}</span>
              <span class="menu-mobile-arrow flex center"
                ><img src="/icons/right.svg"
              /></span>
            </button>

            <ul class="menu-mobile-sublist">
              <li v-for="item in activeCategory?.items || []" :key="item">
                <button class="menu-mobile-sub-item">
                  <span>{{ item }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0px 4px 16px 0px #2a2a480a;
}

.header-top {
  color: var(--white);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  background: var(--dark-gray);
  height: 40px;
  white-space: nowrap;
}

.header-top .phone {
  cursor: pointer;
  float: right;
  padding: 0;
}

.header-top button {
  gap: 8px;
  padding: 0 16px;
  border-radius: var(--radius-sm);
  font-weight: 400;
  letter-spacing: 0.17px;
  font-size: 14px;
  line-height: 14px;
  height: 24px;
  display: flex;
  align-items: center;
}

.header-top button:hover {
  background: var(--darker-gray);
}

.header-top-text {
  color: var(--smoke);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
}

.header-main {
  height: 72px;
}

.logo {
  cursor: pointer;
  width: 146px;
}
.header-actions {
  gap: 25.5px;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 560px;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;
  pointer-events: none;
}

.search input {
  width: 100%;
  height: 42px;
  border-radius: var(--radius-lg);
  border: none;
  background: #ececec4d;
  color: #8493a8;
  padding-left: 43px;
  font-size: 14px;
}

.header-action-button {
  position: relative;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.header-basket-counter {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  outline: 2px solid #ffffff;
  background: #fa4c44;
  color: var(--white);
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  font-weight: 600;
  position: absolute;
  right: -1px;
  top: -9px;
}

.user {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray);
  gap: 17px;
  white-space: nowrap;
}
.user p {
  letter-spacing: -0.1px;
}

.user strong {
  font-weight: 500;
  color: var(--coal);
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 33px;
  outline: 1px solid var(--white);
}

.menu {
  height: 48px;
}
.menu-desktop {
  justify-content: space-between;
  align-items: center;
}
.menu-item {
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 16px;
  color: var(--coal);
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  white-space: nowrap;
}

.menu-item:hover {
  background: #ececec4d;
}
.mobile {
  display: none;
}

.menu-overlay {
  display: none;
}
@media (max-width: 900px) {
  .header-top {
    padding: 8px 16px;
    height: 32px;
  }
  .header-main {
    padding: 16px;
    gap: 16px;
    height: 56px;
  }
  .logo {
    width: 120px;
  }
  .header-actions {
    gap: 40px;
  }
  .header-action-button {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .search {
    width: fit-content;
  }
  .menu {
    height: 0;
  }
  .menu-overlay {
    position: fixed;
    inset: 0;
    background: #ffffff;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 999;
    display: flex;
    flex-direction: column;
  }

  .menu-overlay--open {
    transform: translateX(0);
  }

  .menu-pages {
    position: relative;
    flex: 1;
    overflow: hidden;
  }
  .menu-page {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    transition: transform 0.3s ease;
    overflow-y: scroll;
  }

  .menu-page-root {
    transform: translateX(0);
  }

  .menu-page-root--hidden {
    transform: translateX(-100%);
  }

  .menu-page-detail {
    padding: 16px;
    transform: translateX(-100%);
  }

  .menu-page-detail--visible {
    transform: translateX(0);
  }

  .menu-mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: var(--titan-white);
    max-height: 56px;
  }

  .menu-mobile-header img {
    height: 24px;
    width: 24px;
  }
  .menu-mobile-title {
    display: inline-block;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
  }

  .menu-mobile-close {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
  }

  .menu-mobile-subheader {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    cursor: pointer;
    gap: 8px;
    padding: 8px;
    background: #ececec4d;
  }

  .menu-mobile-list {
    list-style: none;
    margin: 0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .menu-mobile-sublist {
    list-style: none;
    margin: 0;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid var(--smoke);
  }

  .menu-mobile-item {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    background: none;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: var(--coal);
    text-align: left;
    cursor: pointer;
    height: 33px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--smoke);
  }
  .menu-mobile-list button:last-child {
    border-bottom: none;
    padding-bottom: 0;
    height: 24px;
  }
  .menu-mobile-item:active {
    opacity: 0.6;
  }
  .menu-mobile-sub-item {
    width: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(--graphene);
    text-align: left;
    cursor: pointer;
  }

  .menu-mobile-sub-item:active {
    opacity: 0.6;
  }

  .menu-mobile-arrow img {
    height: 24px;
    width: 24px;
  }

  .menu-mobile-settings {
    flex: 1;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 16px;
    gap: 16px;
    background: #ececec4d;
  }

  .menu-mobile-setting {
    align-items: center;
    gap: 8px;
    justify-content: flex-end;
    font-size: 14px;
    color: var(--graphene);
  }
}

@media (max-width: 350px) {
  .header-actions {
    gap: 8px;
  }
}
</style>

<script setup>
import { ref, watch, onBeforeUnmount } from "vue";

const basketCount = ref(2);
const isMenuOpen = ref(false);
const activeCategory = ref(null);

//Fetched categories
const categories = [
  {
    id: "campaigns",
    label: "Campaigns",
    items: [
      "All Campaigns",
      "Online Exclusive",
      "Store Campaigns",
      "Last Chance",
    ],
  },
  {
    id: "personal-care",
    label: "Personal Care",
    items: ["Shower & Bath", "Deodorant", "Oral Care", "Hair Removal"],
  },
  {
    id: "skin-care",
    label: "Skin Care",
    items: ["Facial Treatment", "Hand and Face Care", "Natural Skin Products"],
  },
  {
    id: "make-up",
    label: "Make - Up",
    items: ["Face", "Eyes", "Lips", "Nails", "Tools & Brushes"],
  },
  {
    id: "mother-baby",
    label: "Mother & Baby",
    items: ["Baby Care", "Baby Diapers", "Baby Wipes", "Maternity Care"],
  },
  {
    id: "men-care",
    label: "Men Care",
    items: ["Shaving", "Face & Beard", "Deodorant", "Hair Styling"],
  },
  {
    id: "healthy-life",
    label: "Healthy Life",
    items: [
      "Vitamins & Supplements",
      "Fitness",
      "Wellbeing",
      "Sports Nutrition",
    ],
  },
  {
    id: "brands",
    label: "Brands",
    items: ["Watsons Brand", "Exclusive Brands", "Top Brands", "All Brands"],
  },
];

function openMenu() {
  isMenuOpen.value = true;
  activeCategory.value = null;
}

function closeMenu() {
  isMenuOpen.value = false;
  activeCategory.value = null;
}

function openCategory(category) {
  activeCategory.value = category;
}

function backToRoot() {
  activeCategory.value = null;
}

watch(isMenuOpen, (open) => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  if (open) {
    root.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  } else {
    root.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }
});

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }
});
</script>
