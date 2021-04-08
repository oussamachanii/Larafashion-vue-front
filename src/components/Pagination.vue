<template>
  <div
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
  >
    <div class="flex-1 flex justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
      >
        Previous
      </a>
      <a
        href="#"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
      >
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-md  text-gray-700">
          Showing
          <span class="font-semibold text-current">{{ meta?.from }}</span>
          to
          <span class="font-semibold text-current">{{ meta?.to }}</span>
          of
          <span class="font-semibold text-current">{{ meta?.total }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md overflow-hidden shadow-sm  border border-gray-100 -space-x-px "
          aria-label="Pagination"
        >
          <button
            @click="$emit('paginate', link.url)"
            v-for="(link, index) in meta.links"
            :key="link.label"
            :disabled="!link.url"
            class="relative inline-flex items-center px-2 py-2 border appearance-none focus:ring-0 "
            :class="[
              link.active
                ? 'bg-gray-200 text-md font-semibold text-gray-800 hover:bg-gray-500'
                : 'bg-white text-sm font-medium text-gray-500 hover:bg-gray-50',
              !link.url ? 'cursor-not-allowed bg-gray-300' : '',
            ]"
          >
            <!-- <span class="sr-only">Previous</span> -->
            <p v-if="index > 0 && index < meta.links.length - 1" class="px-3">
              {{ link.label }}
            </p>
            <svg
              v-else-if="index == meta.links.length - 1"
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["links", "meta"],
};
</script>

<style></style>
