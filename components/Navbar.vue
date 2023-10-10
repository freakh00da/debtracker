<template>
  <div class="navbar bg-slate-50 shadow-md">
    <div class="flex-1">
      <nuxt-link to="/dashboard">
        <img class="max-h-9" src="../assets/logo-ext.png" alt="debtrack" />
      </nuxt-link>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <nuxt-link to="/profile" class="justify-between">
              Profile
            </nuxt-link>
          </li>
          <li>
            <a @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "~/plugins/supabase";

export default {
  methods: {
    async logout() {
      try {
        let { error } = await supabase.auth.signOut();

        if (error) {
          console.error("Logout error:", error.message);
        } else {
          localStorage.removeItem("id");
          localStorage.removeItem("access_token");

          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    },
  },
};
</script>
