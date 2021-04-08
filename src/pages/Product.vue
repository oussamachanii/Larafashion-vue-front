<template>
  <div class="md:container md:mx-auto">
    <div
      class="flex font-semibold text-gray-800 text-3xl justify-around w-52 my-4 items-end "
    >
      <router-link to="/" class="text-current-dark">Home</router-link>
      <svg
        class="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p class="text-2xl">Product</p>
    </div>
    <div v-if="loading" class="flex justify-center w-full h-screen">
      <p class="m-auto font-bold text-6xl text-current">Loading ...</p>
    </div>
    <div v-else class="flex flex-col p-4 lg:flex-row  ">
      <div class="flex  flex-col mb-2 lg:flex-row">
        <div class=" flex justify overflow-x-auto lg:flex-col w-32  ">
          <img
            v-for="image in product.images"
            :key="image.id"
            style="height: 100px; width: 100px; "
            :src="image.src"
            class="  rounded-xl shadow-lg cursor-pointer border p-1 bg-gray-200 mx-3 my-2 bg-opacity-20"
            :class="
              selectedPicture.id == image.id
                ? 'shadow-lg ring-4 ring-current ring-opacity-50 ring-offset-gray-500'
                : ''
            "
            @click="switchImages(image)"
            alt="product photo"
          />
        </div>

        <div class=" flex lg:mx-3 flex-col  px-12">
          <img
            v-if="selectedPicture"
            style="height: 500px; width: 500px;"
            :src="selectedPicture.src"
            class="mx-auto  rounded-xl mt-3 "
            alt="product photo"
          />
          <img
            v-else
            style="height: 500px; width: 500px;"
            src="../assets/NotFound.jpg"
            class="mx-auto  rounded-xl mt-3 border "
            alt="product photo"
          />
          <p
            style="width: 500px; "
            class="font-semibold px-8 pr-4 my-3 overflow-ellipsis overflow-hidden  text-gray-600"
          >
            {{ product?.description }}
          </p>
        </div>
      </div>
      <div class="flex flex-col px-8 lg:flex-grow ">
        <h1
          class="text-3xl font-semibold overflow-ellipsis text-gray-900 md:text-xl text-left lg:text-4xl"
        >
          {{ product?.title }}
        </h1>
        <div class="flex my-4 ">
          <svg
            v-for="i in 5"
            :key="i"
            :class="
              product?.rating?.stars >= i
                ? 'text-current-light'
                : 'text-gray-300'
            "
            class="w-6 h-6 fill-current "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <p class="text-gray-400 ml-1 text-sm ">
            ({{ product?.rating?.times }})
          </p>
        </div>
        <div class="flex items-center my-2">
          <h6 class="font-semibold text-xl text-current">Size :</h6>
          <p
            v-if="product?.sizes?.length == 0"
            class="text-2xl flex font-semibold ml-auto lg:ml-4"
          >
            Sorry no sizes are available !
          </p>
          <p
            @click="selectedItem.size = size.id"
            v-else
            v-for="size in product?.sizes"
            :key="size.id"
            :class="
              selectedItem.size == size.id
                ? 'ring-offset-current ring-current transform scale-110 ring-opacity-75 shadow-2xl ring-4'
                : 'shadow-sm'
            "
            class="text-2xl flex cursor-pointer font-semibold ml-auto lg:ml-4 border rounded-md py-1 px-4"
          >
            {{ size.title }}
          </p>
        </div>
        <div class="flex items-center flex-col my-2">
          <h6 class="font-semibold text-xl text-left w-full text-current ">
            Colors :
          </h6>
          <div v-if="product?.colors?.length == 0" class="ml-auto flex  ">
            Sorry no colors are available !
          </div>
          <div else class="flex w-2/3 flex-wrap">
            <div
              @click="selectedItem.color = color.id"
              v-for="color in product?.colors"
              :key="color.id"
              :style="'background-color:' + color.color_Hex + ';'"
              :class="
                selectedItem.color == color.id
                  ? 'ring-offset-current ring-current transform scale-110 ring-opacity-75 shadow-2xl ring-4'
                  : 'shadow-sm'
              "
              class="h-8 w-16  cursor-pointer mx-2 my-3 rounded-md "
            ></div>
          </div>
        </div>
        <div class="flex items-center my-2">
          <h6 class="font-semibold text-xl text-current">For :</h6>
          <h6
            v-if="product?.sex > 0"
            class="text-xl font-semibold ml-auto lg:ml-4"
          >
            {{ product?.sex == 1 ? "Male" : "Female" }}
          </h6>
          <h6 v-else class="text-2xl font-semibold ml-auto lg:ml-4">
            Both
          </h6>
        </div>
        <div class="flex items-center my-2">
          <h6 class="font-semibold text-xl text-current">Shipping :</h6>
          <h6 class="text-xl font-semibold ml-auto lg:ml-4">
            Free
            {{ product?.shipping > 0 ? product?.shipping : "Free" }}
          </h6>
        </div>
        <div class="flex items-center my-2">
          <h6 class="font-semibold text-xl text-current">Total price :</h6>
          <h6 class="text-xl font-semibold ml-auto lg:ml-4">
            ${{ totalPrice }}
          </h6>
          <h5
            v-if="product?.discount != 0"
            class="bg-green-200 font-semibold rounded-lg text-green-800 py-1 px-2 line-through md:text-lg  lg:ml-4"
          >
            -{{ product?.discount }}%
          </h5>
        </div>
        <div class="flex  flex-col my-2 lg:items-center lg:flex-row ">
          <h6 class="font-semibold text-xl text-current mb-2 lg:mb-0 ">
            Quantity :
          </h6>
          <div class="flex items-center mx-auto lg:mx-0  ">
            <button
              :disabled="selectedItem.quantity >= 10"
              :class="selectedItem.quantity >= 10 ? 'cursor-not-allowed ' : ''"
              @click="selectedItem.quantity <= 9 ? selectedItem.quantity++ : ''"
              class="text-2xl font-semibold ml-auto lg:ml-4 border p-4 rounded-lg"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              v-model="selectedItem.quantity"
              class="px-4 py-4 h-full mx-4 font-semibold text-xl rounded-xl focus:ring-0 shadow-lg bg-gray-300 lg:w-12"
            />
            <button
              :disabled="selectedItem.quantity < 1"
              :class="selectedItem.quantity <= 1 ? 'cursor-not-allowed ' : ''"
              @click="selectedItem.quantity > 1 ? selectedItem.quantity-- : ''"
              class="text-2xl font-semibold ml-auto lg:ml-2 border p-4 rounded-lg"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row   my-4 lg:mt-8">
          <button
            @click="buy"
            :class="
              buyDisabled
                ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                : 'bg-current text-white hover:bg-current-light'
            "
            class=" w-full  bg-current py-4 px-8 rounded-xl  shadow-lg  lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-none my-1 "
          >
            <span class="text-white font-semibold text-xl">Buy Now</span>
          </button>
          <button
            class=" w-full bg-white border-2 py-4 px-8 rounded-xl  shadow-lg   lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-none my-1 "
          >
            <span class="text-current font-semibold text-xl">Add To bag</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <h1>Product {{ $route.params.id }}</h1> -->
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  props: ["id"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const loading = ref(true);
    const buyDisabled = ref(false);
    const selectedPicture = ref({});
    const selectedItem = ref({
      size: null,
      color: null,
      quantity: 1,
    });
    const totalPrice = computed(
      () => selectedItem.value.quantity * product?.value.price
    );
    const product = ref({});
    onMounted(() => {
      axios
        .get("product/" + props.id)
        .then((response) => {
          product.value = response.data[0];
          console.log(product.value);
          loading.value = false;
          selectedPicture.value = product.value.images[0];
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
          history.back();
        });
    });
    const switchImages = (image) => {
      selectedPicture.value = image;
    };
    // to ckeck if the orders checked and if the user is authenticated
    const validateBuy = () => {
      // check if the user is authenticated
      if (!store.getters.getUser) {
        router.push({ name: "login" });
        return "Please Do Login";
      }
      if (!selectedItem.value.size || !selectedItem.value.color) {
        if (!selectedItem.value.size) {
          return "Please select your size";
        }
        if (!selectedItem.value.color) {
          return "Please select your color";
        }
        return "order not selected";
      }
      return false;
    };

    const buy = () => {
      if (!validateBuy()) {
        // validation passed
        axios
          .post(
            "purchase",
            //  'quantity','total_price','user_id','size_id','color_id','product_id'
            {
              quantity: selectedItem.value.quantity,
              total_price: totalPrice.value,
              user_id: store.getters.getUser.id,
              size_id: selectedItem.value.size,
              color_id: selectedItem.value.color,
              product_id: props.id,
            },
            {
              headers: {
                Authorization: `Bearer ${store.state.auth.api_token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            store.commit("setToast", {
              message: "Thank you for placing your order",
              type: "success",
            });
            history.back();
          })
          .then((error) => {
            store.commit("setToast", {
              message: error.message,
              type: "error",
            });
          });
      } else {
        //validation not passed
        store.commit("setToast", {
          message: validateBuy(),
          type: "error",
        });
        buyDisabled.value = true;
        setTimeout(() => {
          buyDisabled.value = false;
        }, 5000);
      }
    };

    return {
      loading,
      product,
      selectedPicture,
      switchImages,
      buy,
      selectedItem,
      buyDisabled,
      totalPrice,
    };
  },
};
</script>

<style></style>
