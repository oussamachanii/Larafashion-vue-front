<template>
  <div class="flex w-screen h-screen bg-gray-50 ">
    <div class="w-full lg:w-1/2 border bg-white m-auto rounded-xl shadow-xl  ">
      <h2
        class="my-4 text-center lg:text-2xl :text-4xl font-bold text-gray-800"
      >
        Complete Information
      </h2>
      <div id="content" class="w-11/12 mx-auto ">
        <form id="form" class="w-full  ">
          <div class="flex justify-between mb-2">
            <div class="mr-2">
              <label
                for="FirstName"
                class=" block mb-2 font-semibold text-lg text-current "
                >First Name</label
              >
              <input
                ref="FirstName"
                type="FirstName"
                name="FirstName"
                class="text-xl font-medium text-body  p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
              />
            </div>
            <div class="w-1/2 ml-2">
              <label
                for="LastName"
                class=" block mb-2 font-semibold text-lg text-current "
                >Last Name</label
              >
              <input
                ref="LastName"
                type="LastName"
                name="LastName"
                class="text-xl font-medium text-body  p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="mb-2 flex justify-between">
            <div class="w-1/2 mr-2">
              <label
                for="Country"
                class=" block mb-2 font-semibold text-lg text-current "
                >Country</label
              >
              <input
                ref="Country"
                type="Country"
                name="Country"
                class="text-xl font-medium text-body  p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
              />
            </div>
            <div class="mx-2">
              <label
                for="Region"
                class=" block mb-2 font-semibold text-lg text-current "
                >Region</label
              >
              <input
                ref="Region"
                type="Region"
                name="Region"
                class="text-xl font-medium text-body  p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
              />
            </div>
            <div class="ml-2">
              <label
                for="City"
                class=" block mb-2 font-semibold text-lg text-current "
                >City</label
              >
              <input
                ref="City"
                type="City"
                name="City"
                class="text-xl font-medium text-body  p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="mb-2">
            <label
              for="Address"
              class=" block mb-2 font-semibold text-lg text-current "
              >Address</label
            >
            <input
              ref="Address"
              type="Address"
              name="Address"
              class="text-xl font-medium text-body  p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
            />
          </div>
          <div class="mb-2">
            <label
              for="PostalCode"
              class=" block mb-2 font-semibold text-lg text-current "
              >Postal Code</label
            >
            <input
              ref="PostalCode"
              type="PostalCode"
              name="PostalCode"
              class="text-xl font-medium text-body  p-4 bg-gray-200  
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
              <!-- <div class="flex justify-between py-4">
                <div class="mr-2">Login</div>
                <div></div>
              </div> -->
              <!-- <div v-else class="w-full">
                <half-circle-spinner
                  :animation-duration="1000"
                  :size="29"
                  color="white"
                  class="mx-auto"
                />
              </div> -->
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const user = ref({
      FirstName: "",
      LastName: "",
      Country: "",
      Region: "",
      City: "",
      Address: "",
      PostalCode: "",
    });
    const isLoading = ref(isLoading);
    return { user, isLoading };
  },
};
</script>

<style></style>
