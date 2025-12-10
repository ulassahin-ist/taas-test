<script setup>
import { ref } from "vue";

const activeColumnIndex = ref(null);
const toggle = (i) => {
  activeColumnIndex.value = activeColumnIndex.value === i ? null : i;
};
</script>

<template>
  <!-- Inconsistent caps casing kept for pixel perfect -->
  <footer class="w-full page-pad">
    <div class="footer container flex column">
      <div class="footer-nav flex">
        <div class="footer-column" :class="{ open: activeColumnIndex === 0 }">
          <button class="footer-toggle" @click="toggle(0)">
            <span class="footer-heading">CORPORATE</span>

            <img
              class="rotated-button mobile"
              v-if="activeColumnIndex === 0"
              src="/icons/up.svg"
            />
            <img v-else src="/icons/down.svg" class="mobile" />
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">About us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Human resources</a></li>
            <li><a href="#">News from us</a></li>
          </ul>
          <div class="footer-divider mobile"></div>
        </div>

        <div class="footer-column" :class="{ open: activeColumnIndex === 1 }">
          <button class="footer-toggle" @click="toggle(1)">
            <span class="footer-heading">SHOPPING</span>

            <img
              class="rotated-button mobile"
              v-if="activeColumnIndex === 1"
              src="/icons/up.svg"
            />
            <img v-else src="/icons/down.svg" class="mobile" />
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">Order and Payment</a></li>
            <li><a href="#">Cancellation and Refund</a></li>
            <li><a href="#">Delivery Conditions</a></li>
            <li><a href="#">Secure shopping</a></li>
          </ul>
          <div class="footer-divider mobile"></div>
        </div>

        <div class="footer-column" :class="{ open: activeColumnIndex === 2 }">
          <button class="footer-toggle" @click="toggle(2)">
            <span class="footer-heading">LEGAL</span>

            <img
              class="rotated-button mobile"
              v-if="activeColumnIndex === 2"
              src="/icons/up.svg"
            />
            <img v-else src="/icons/down.svg" class="mobile" />
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Membership Agreement</a></li>
            <li><a href="#">Distance Selling Contract</a></li>
          </ul>
          <div class="footer-divider mobile"></div>
        </div>

        <div class="footer-column" :class="{ open: activeColumnIndex === 3 }">
          <button class="footer-toggle" @click="toggle(3)">
            <span class="footer-heading">HELP CENTER</span>

            <img
              class="rotated-button mobile"
              v-if="activeColumnIndex === 3"
              src="/icons/up.svg"
            />
            <img v-else src="/icons/down.svg" class="mobile" />
          </button>

          <ul class="footer-list flex column">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact center</a></li>
          </ul>
          <div class="footer-divider mobile"></div>
        </div>

        <div class="footer-column" :class="{ open: activeColumnIndex === 4 }">
          <button class="footer-toggle" @click="toggle(4)">
            <span class="footer-heading">CONTACT US</span>

            <img
              class="rotated-button mobile"
              v-if="activeColumnIndex === 4"
              src="/icons/up.svg"
            />
            <img v-else src="/icons/down.svg" class="mobile" />
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
          <div class="footer-divider mobile"></div>
        </div>
      </div>

      <div class="copyright-socials flex w-full">
        <div class="copyright">
          <span>© Watsons 2021 all rıghts reserved</span>
          <div class="desktop" style="margin: 0 5px">|</div>
          <span>a member of ck hutchıson holdıngs</span>
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
  </footer>
</template>

<style scoped>
.page-pad {
  padding: 46.21px 0 47.8px;
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
  gap: 34px;
  width: 160px;
  display: flex;
  flex-direction: column;
}

.footer-toggle {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding-right: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 0;
  letter-spacing: 0px;
  height: 16px;
}

.footer-heading {
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
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
.footer-divider {
  height: 1px;
  width: 100%;
  background: var(--smoke);
}
.copyright-socials {
  justify-content: space-between;
}
.copyright {
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: var(--gray);
  display: flex;
  align-items: center;
}

.socials img {
  cursor: pointer;
  height: 32px;
  width: 32px;
  display: block;
}

@media (min-width: 769px) {
  .mobile {
    display: none;
  }

  .footer-nav {
    flex-direction: row;
  }
  .footer-nav .footer-column:last-child {
    width: 360px;
  }
  .footer-list {
    max-height: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .footer-toggle {
    pointer-events: none;
  }
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }

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

  .footer-column {
    /* max-height: 33px; */
    gap: 0;
    width: 100%;
  }

  .footer-toggle {
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .footer-toggle img {
    height: 24px;
    width: 24px;
    display: block;
  }
  .rotated-button mobile {
    transform: translate(0, 0) rotate(-1deg);
  }

  .footer-list {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    gap: 8px;
  }

  .footer-column.open {
    max-height: none;
  }

  .footer-column.open .footer-list {
    max-height: 200px;
    opacity: 1;
    display: flex;
    margin-bottom: 16px;
  }

  .footer-column.open .footer-toggle {
    margin-bottom: 16px;
  }

  .copyright {
    flex-direction: column;
    gap: 0;
    justify-content: center;
    align-items: center;
  }

  .copyright-socials {
    flex-direction: column-reverse;
    gap: 24px;
  }
}
</style>
