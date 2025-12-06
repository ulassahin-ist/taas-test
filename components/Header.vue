<template>
  <header class="header flex column">
    <div class="top-bar flex center">
      <div class="container flex center">
        <div class="header-nav flex grow gap-8">
          <button name="stores" class="flex center">
            <img src="/icons/store.svg" />Stores
          </button>
          <button name="catalog" class="flex center">
            <img src="/icons/catalog.svg" />Catalog
          </button>
        </div>
        <p>Watsons Beauty and Personal Care Awards Nominees!</p>
        <div class="header-contact gap-8 grow">
          <!-- Note: Not a button because it has no padding in figma/unmatching style-->
          <div class="phone flex center gap-8">
            Call us:(+90) 850 123 45 67<img src="/icons/phone.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="mid-bar flex center container">
      <img class="logo" src="/logo.png" alt="Logo" />
      <div class="header-actions grow flex center flex-end gap-20">
        <div class="search">
          <img src="/icons/search.svg" class="search-icon" />
          <input
            type="text"
            placeholder="Write the product or category you are looking for"
          />
        </div>
        <div class="user gap-16 flex center">
          <p>Hello, <strong>Clara Clara</strong></p>
          <img class="avatar" src="/avatar.png" alt="Avatar" />
          <img style="cursor: pointer" src="/icons/down.svg" alt="Drop" />
        </div>
        <div class="divider-vertical"></div>
        <img
          style="padding-bottom: 10px; cursor: pointer"
          src="/icons/basket-fill.svg"
          alt="Basket"
        />
      </div>
    </div>
    <div class="menu flex container center">
      <button class="menu-item">CAMPAIGNS</button>
      <button class="menu-item">PERSONAL CARE</button>
      <button class="menu-item">SKIN CARE</button>
      <button class="menu-item">MAKE-UP</button>
      <button class="menu-item">MOTHER & BABY</button>
      <button class="menu-item">MEN CARE</button>
      <button class="menu-item">HEALTHY LIFE</button>
      <button class="menu-item">BRANDS</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0px 4px 16px 0px #2a2a480a;
}

.top-bar {
  color: var(--white);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  background: var(--dark-gray);
  height: 40px;
  white-space: nowrap;
}

.top-bar .phone {
  cursor: pointer;
  float: right;
  padding: 0;
}

.top-bar button {
  gap: 8px;
  padding: 0 16px;
  border-radius: var(--radius-sm);
  font-weight: 400;
}

.top-bar button:hover {
  background: var(--darker-gray);
}

.top-bar p {
  color: var(--smoke);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
}

.mid-bar {
  height: 72px;
}

.mid-bar .logo {
  width: 146px;
}

.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 560px;
}

.search-icon {
  position: absolute;
  left: 14px;
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.search input {
  width: 100%;
  height: 42px;
  border-radius: var(--radius-lg);
  border: none;
  background: #ececec4d;
  padding-left: 44px;
  font-size: 14px;
}

.search input:focus {
  outline: 1px solid var(--gray);
}

.user {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray);
}

.user strong {
  font-weight: 500;
  color: var(--coal);
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
}

.menu {
  height: 48px;
  justify-content: space-between;
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
}

.menu-item:hover {
  background: #ececec4d;
}
</style>
