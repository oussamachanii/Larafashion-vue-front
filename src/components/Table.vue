<template>
  <div class="flex flex-col w-full shadow-md">
    <div class="-my-2 overflow-x-auto ">
      <div class="py-2 align-middle inline-block w-full overflow-y-auto ">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="divide-y divide-gray-200 w-full">
            <thead class="bg-gray-50">
              <tr>
                <slot name="Header"></slot>
                <th scope="col" class="relative  py-3">
                  <!-- <span class="sr-only">Edit</span> -->
                </th>
              </tr>
            </thead>
            <tbody class="bg-white  divide-gray-200">
              <slot name="Content"></slot>
            </tbody>
          </table>
          <slot name="Pagination"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
