<template>
  <div class="flex w-screen h-screen bg-gray-50 ">
    <div class="w-full lg:w-1/2 border bg-white m-auto rounded-xl shadow-xl  ">
      <h2
        class="my-6 text-center lg:text-2xl :text-4xl font-bold text-gray-800"
      >
        Settings
      </h2>
      <div id="content" class="  w-11/12 mx-auto ">
        <div class="h-12 w-full  mb-3 flex">
          <div
            class="w-1/2  mr-2 px-8 cursor-pointer "
            @click="component = 'Information'"
          >
            <h2
              :class="
                component == 'Information'
                  ? ' border-current border-b-4  font-bold  '
                  : ' font-normal  border-b'
              "
              class="text-center text-xl pb-4  "
            >
              Informations
            </h2>
          </div>
          <div
            class="w-1/2  ml-2 px-8 cursor-pointer"
            @click="component = 'Security'"
          >
            <h2
              :class="
                component == 'Security'
                  ? '  border-current border-b-4  font-bold  '
                  : ' font-normal border-b'
              "
              class="text-center text-xl  pb-4   font-semibold text-current"
            >
              Security
            </h2>
          </div>
        </div>
        <component :is="component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Information from "../components/Information";
import Security from "../components/Security";
import { ref } from "vue";
export default {
  components: { Information, Security },
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
    const component = ref("Information");
    const isLoading = ref(isLoading);
    return { user, isLoading, component };
  },
};
</script>

<style></style>
