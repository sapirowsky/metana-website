<script setup></script>
<template>
  <div id="faq" class="grid h-max place-items-center">
    <div class="container flex flex-col gap-2 px-6 py-20">
      <div class="collapse collapse-arrow z-30 bg-gray-300 dark:bg-gray-800">
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
      <div class="collapse collapse-arrow z-20 bg-gray-300 dark:bg-gray-800">
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
