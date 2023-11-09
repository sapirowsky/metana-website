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
        <label for="first" class="sr-only">Click to see answer</label>
        <input
          id="first"
          type="radio"
          name="my-accordion-2"
          checked="checked"
        />
        <div class="collapse-title text-xl font-medium">Are you hiring?</div>
        <div class="collapse-content">
          <div class="w-full">
            <p>
              Yes, we are actively looking for qualified individuals to join our
              team as CNC programmers & operators, manual lathe operators, and
              production workers. If you have the skills and experience for any
              of these positions, we encourage you to explore the opportunities
              available on our career page and submit your application. We look
              forward to potentially welcoming you to our company.
            </p>
          </div>
        </div>
      </div>
      <div
        class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-20 hide-question show-question"
      >
        <label for="second" class="sr-only">Click to see answer</label>
        <input id="second" type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          What machines do we use?
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div
        class="collapse collapse-arrow bg-gray-300 dark:bg-gray-800 z-10 hide-question show-question"
      >
        <label for="third" class="sr-only">Click to see answer</label>
        <input id="third" type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          Which materials do we usually work with?
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
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
