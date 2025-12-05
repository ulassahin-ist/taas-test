<!-- components/Header.vue -->
<template>
  <header class="header flex column">
    <div class="top-bar flex center">
      <div class="container flex center">
        <div class="part flex grow">
          <button name="stores" class="flex center">
            <img src="/icons/store.svg" />Stores
          </button>
          <button name="catalog" class="flex center">
            <img src="/icons/catalog.svg" />Catalog
          </button>
        </div>
        <p>Watsons Beauty and Personal Care Awards Nominees!</p>
        <div class="part grow">
          <button class="phone flex center">
            Call us:(+90) 850 123 45 67<img src="/icons/phone.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="mid-bar flex center container">
      <img class="logo" src="/logo.png" alt="Logo" />
      <div class="part grow flex center">
        <div class="search">
          <img src="/icons/search.svg" class="search-icon" />
          <input
            type="text"
            placeholder="Write the product or category you are looking for"
          />
        </div>
        <div class="user flex center">
          <p>Hello, <strong>Clara Clara</strong></p>
          <img class="avatar" src="/avatar.png" alt="Avatar" />
          <img style="cursor: pointer" src="/icons/down.svg" alt="Drop" />
        </div>
        <div class="divider"></div>
        <img
          style="padding-bottom: 10px; cursor: pointer"
          src="/icons/basket.svg"
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
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  background: var(--dark-gray);
  height: 40px;
  white-space: nowrap;
}
.top-bar .part {
  gap: 8px;
}
.top-bar .phone {
  gap: 8px;
  justify-self: end;
  cursor: pointer;
  width: fit-content;
}
.top-bar button {
  gap: 8px;
  width: 99px;
}
.top-bar p {
  color: var(--smoke);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  vertical-align: middle;
}
.mid-bar {
  height: 72px;
}
.mid-bar .logo {
  width: 146px;
}
.mid-bar .part {
  justify-content: end;
  gap: 20px;
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
  border-radius: 32px;
  border: none;
  background: #ececec4d;
  padding-left: 44px;
  font-size: 14px;
  font-family: Roboto;
}
.user {
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray);
  gap: 16px;
}
.user strong {
  font-family: Roboto;
  font-weight: 500;
  color: var(--coal);
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
}
.divider {
  width: 24px;
  height: 0.5px;
  transform: rotate(90deg);
  background: var(--smoke);
}
.menu {
  height: 48px;
  justify-content: space-between;
}
.menu-item {
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  vertical-align: middle;
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
