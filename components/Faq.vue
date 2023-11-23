<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-question")
      } else {
        entry.target.classList.remove("show-question")
      }
    })
  })

  // const hiddenElements = document.querySelectorAll(".hide-question")
  // hiddenElements.forEach((el) => observer.observe(el))
})
</script>
<template>
  <div id="faq" class="h-max grid place-items-center">
    <div class="container px-6 py-20 flex flex-col gap-2">
      <div
        class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-30 hide-question show-question"
      >
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
      <div
        class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-20 hide-question show-question"
      >
        <label for="second" class="sr-only">{{ $t("faq.srLabel") }}</label>
        <input id="second" type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          {{ $t("faq.second.question") }}
        </div>
        <div class="collapse-content">
          <Carousel />
        </div>
      </div>
      <!-- <div
        class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-10 hide-question show-question"
      >
        <label for="third" class="sr-only">{{ $t("faq.srLabel") }}</label>
        <input id="third" type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          {{ $t("faq.third.question") }}
        </div>
        <div class="collapse-content">
          <p></p>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style>
.hide-question {
  transform: perspective(1000px) translateY(-20px) scale(0.85);
  opacity: 0.5;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.show-question {
  transform: translateY(0) scale(1);
  opacity: 1;
}
</style>
