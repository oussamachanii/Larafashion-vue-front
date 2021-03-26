<template>
  <form id="form" class="w-full  ">
    <div class="mb-2">
      <label
        for="CurrentPassword"
        class=" block mb-2 font-semibold text-lg text-current "
        >Current Password</label
      >
      <input
        ref="CurrentPassword"
        type="password"
        name="CurrentPassword"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
    </div>
    <div class="mb-2">
      <label
        for="NewPassword"
        class=" block mb-2 font-semibold text-lg text-current "
        >New Password</label
      >
      <input
        ref="NewPassword"
        type="password"
        name="NewPassword"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
    </div>
    <div class="mb-2">
      <label
        for="RePassword"
        class=" block mb-2 font-semibold text-lg text-current "
        >Retype Password</label
      >
      <input
        ref="RePassword"
        type="password"
        name="RePassword"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
    </div>

    <div class="w-full flex">
      <button
        :disabled="isLoading"
        type="submit"
        :class="
          isLoading
            ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
            : 'bg-current text-white focus:bg-current-light'
        "
        class="w-full mx-auto py-5  my-10 shadow-lg rounded-lg
                    font-medium text-white uppercase
                    focus:outline-none hover:shadow-none"
      >
        <div v-if="!isLoading">Save</div>
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
