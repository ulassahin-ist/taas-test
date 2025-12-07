<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const openIndex = ref(null);
const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i;
};

const isMobile = ref(false);

function updateSize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  updateSize();
  window.addEventListener("resize", updateSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSize);
});
</script>

<template>
  <!-- Inconsistent caps casing kept for pixel perfect -->
  <div class="w-full page-pad">
    <div class="footer container flex column">
      <div class="footer-nav flex">
        <div
          class="footer-column flex column"
          :class="{ open: openIndex === 0 }"
        >
          <button class="footer-toggle" @click="toggle(0)">
            <span class="footer-heading">CORPORATE</span>
            <span class="footer-toggle-icon">
              <img v-if="openIndex === 0" src="/icons/up.svg" />
              <img v-else src="/icons/down.svg" />
            </span>
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">About us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Human resources</a></li>
            <li><a href="#">News from us</a></li>
          </ul>
        </div>

        <div
          class="footer-column flex column"
          :class="{ open: openIndex === 1 }"
        >
          <button class="footer-toggle" @click="toggle(1)">
            <span class="footer-heading">SHOPPING</span>
            <span class="footer-toggle-icon">
              <img v-if="openIndex === 1" src="/icons/up.svg" />
              <img v-else src="/icons/down.svg" />
            </span>
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">Order and Payment</a></li>
            <li><a href="#">Cancellation and Refund</a></li>
            <li><a href="#">Delivery Conditions</a></li>
            <li><a href="#">Secure shopping</a></li>
          </ul>
        </div>

        <div
          class="footer-column flex column"
          :class="{ open: openIndex === 2 }"
        >
          <button class="footer-toggle" @click="toggle(2)">
            <span class="footer-heading">LEGAL</span>
            <span class="footer-toggle-icon">
              <img v-if="openIndex === 2" src="/icons/up.svg" />
              <img v-else src="/icons/down.svg" />
            </span>
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Memebership Agreement</a></li>
            <li><a href="#">Distance Selling Contract</a></li>
          </ul>
        </div>

        <div
          class="footer-column flex column"
          :class="{ open: openIndex === 3 }"
        >
          <button class="footer-toggle" @click="toggle(3)">
            <span class="footer-heading">HELP CENTER</span>
            <span class="footer-toggle-icon">
              <img v-if="openIndex === 3" src="/icons/up.svg" />
              <img v-else src="/icons/down.svg" />
            </span>
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact center</a></li>
          </ul>
        </div>

        <div
          class="footer-column flex column"
          :class="{ open: openIndex === 4 }"
        >
          <button class="footer-toggle" @click="toggle(4)">
            <span class="footer-heading">CONTACT US</span>
            <span class="footer-toggle-icon">
              <img v-if="openIndex === 4" src="/icons/up.svg" />
              <img v-else src="/icons/down.svg" />
            </span>
          </button>

          <ul class="footer-list flex column">
            <li class="flex gap-8 flex-start">
              <img src="/icons/location.svg" />
              <a href="#"
                >Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768
                Ümraniye/İstanbul</a
              >
            </li>
            <li class="flex gap-8">
              <img src="/icons/phone.svg" />
              <a href="#">0850 755 9987</a>
            </li>
            <li class="flex gap-8">
              <img src="/icons/mail.svg" />
              <a href="#">info@watsons.com.tr</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright-socials flex center w-full">
        <div class="copyright">
          © Watsons 2021 all rıghts reserved
          <span v-if="!isMobile">|</span><span v-else><br /></span> a member of
          ck hutchıson holdıngs
        </div>
        <div class="socials flex gap-24 center">
          <img src="/icons/facebook.svg" />
          <img src="/icons/twitter.svg" />
          <img src="/icons/instagram.svg" />
          <img src="/icons/youtube.svg" />
          <img src="/icons/pinterest.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-pad {
  padding: 48px 0;
}
.footer {
  gap: 32px;
}
.footer-nav {
  gap: 40px;
}

.footer-nav li {
  line-height: 0px;
}

.footer-nav a {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--graphene);
  transition: opacity 0.15s ease-in-out;
}

.footer-nav a:hover {
  opacity: 0.8;
}

.footer-column {
  flex: 1;
  gap: 32px;
}

.footer-toggle {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  cursor: pointer;
}

.footer-heading {
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}

.footer-toggle-icon {
  font-size: 16px;
  height: 16px;
}

.footer-list {
  list-style: none;
  padding: 0;
  gap: 16px;
  transition: all 0.3s ease;
}
.footer-list img {
  height: fit-content;
}

.copyright {
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: var(--gray);
}
.socials img {
  cursor: pointer;
}
@media (min-width: 769px) {
  .footer-nav {
    flex-direction: row;
  }

  .footer-list {
    max-height: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .footer-toggle {
    pointer-events: none;
  }

  .footer-toggle-icon {
    display: none;
  }
}

@media (max-width: 768px) {
  .page-pad {
    padding: 16px;
  }
  .footer {
    gap: 24px;
  }
  .footer-nav {
    flex-direction: column;
    gap: 16px;
  }
  .footer-toggle {
    padding: 4px 0;
  }
  .footer-column {
    gap: 8px;
    border-bottom: 1px solid var(--smoke);
  }

  .footer-list {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    gap: 8px;
  }

  .footer-column.open .footer-list {
    max-height: 200px;
    opacity: 1;
    visibility: visible;
  }

  .footer-column.open {
    padding-bottom: 16px;
    gap: 16px;
  }

  .copyright {
    text-align: center;
  }
  .copyright-socials {
    flex-direction: column-reverse;
    gap: 24px;
  }
}
</style>
