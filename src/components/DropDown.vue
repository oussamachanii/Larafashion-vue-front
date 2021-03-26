<template>
  <div
    class="origin-top-right absolute z-50 border left-24     top-14  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="options-menu"
  >
    <div class="py-1" role="none">
      <router-link
        :to="{ name: 'settings' }"
        class="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Settings</router-link
      >

      <form method="POST" action="#" role="none">
        <button
          type="submit"
          class="block w-full text-left px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Sign out
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
