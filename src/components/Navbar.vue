<template>
  <nav class="navBar bg-primary px-3 h-100">
    <router-link :to="{ name: 'Home' }">
      <img
        class="img-fluid"
        alt="logo"
        src="https://64.media.tumblr.com/fffd05f68055e4d520bb215b1d4bcfbd/d6cbfb4b581b4eab-eb/s250x400/3651fd7201dcd35adfef1df49c7fd27f9c84ca5c.png"
      />
    </router-link>
    <div id="navbarText">
      <ul class="navbar-nav me-auto">
        <span>
          <button
            class="
              btn
              selectable
              text-dark
              bg-success
              lighten-30
              text-uppercase
              my-1
            "
            @click="login"
            v-if="!user.isAuthenticated"
          >
            Login
          </button>

          <div class="my-2" v-else>
            <div
              class="dropdown-toggle selectable"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="authDropdown"
            >
              <img
                :src="user.picture"
                alt="user photo"
                height="40"
                class="rounded"
              />
            </div>
            <div
              class="dropdown-menu p-0 list-group"
              aria-labelledby="authDropdown"
            >
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item list-group-item-action hoverable">
                  Manage Account
                </div>
              </router-link>
              <div
                class="
                  list-group-item list-group-item-action
                  hoverable
                  text-danger
                "
                @click="logout"
              >
                <i class="mdi mdi-logout"></i>
                logout
              </div>
            </div>
          </div>
        </span>
      </ul>
    </div>
  </nav>
</template>

<script>
import { AuthService } from "../services/AuthService";
import { AppState } from "../AppState";
import { computed } from "vue";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>

<style scoped>
.navBar {
  position: fixed;
}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
/* .hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
} */
</style>
