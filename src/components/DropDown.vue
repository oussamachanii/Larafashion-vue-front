<template>
  <div
    class="origin-top-right absolute z-50 border  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    :class="is_home ? '-left-8 top-14' : 'top-14 left-8'"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="options-menu"
  >
    <div class="py-1" role="none">
      <router-link
        v-if="!is_home"
        :to="{ name: 'home' }"
        class="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Home</router-link
      >
      <router-link
        v-if="is_admin == 1"
        :to="{ name: 'users' }"
        class="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Dashboard</router-link
      >

      <router-link
        :to="{ name: 'settings' }"
        class="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Settings</router-link
      >

      <button
        @click="$emit('logOut')"
        class="block w-full text-left px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Sign out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["is_admin", "is_home"],
};
</script>

<style></style>
