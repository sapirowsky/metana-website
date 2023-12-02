<script setup></script>
<template>
  <div id="faq" class="h-max grid place-items-center">
    <div class="container px-6 py-20 flex flex-col gap-2">
      <div class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-30">
        <label for="first" class="sr-only">{{ $t("faq.srLabel") }}</label>
        <input
          id="first"
          type="radio"
          name="my-accordion-2"
          checked="checked"
        />
        <div class="collapse-title text-xl font-medium">
          {{ $t("faq.first.question") }}
        </div>
        <div class="collapse-content">
          <div class="w-full">
            <p>
              {{ $t("faq.first.answer") }}
            </p>
          </div>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-20">
        <label for="second" class="sr-only">{{ $t("faq.srLabel") }}</label>
        <input id="second" type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          {{ $t("faq.second.question") }}
        </div>
        <div class="collapse-content">
          <Carousel />
        </div>
      </div>
    </div>
  </div>

  <div class="container max-w-screen-xl"></div>
</template>
<style></style>
