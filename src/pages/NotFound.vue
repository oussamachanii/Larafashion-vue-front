<template>
  <div class="flex w-screen  h-screen">
    <div class="m-auto select-none">
      <h2 class="text-7xl font-bold">
        Not Found 404
      </h2>
      <button
        @click="$router.go(-1)"
        class="py-4 px-8  rounded-xl mt-8 font-bold bg-current text-white"
      >
        GO BACK
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
