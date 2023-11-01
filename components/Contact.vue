<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-contact")
      } else {
        entry.target.classList.remove("show-contact")
      }
    })
  })

  const hiddenElements = document.querySelectorAll(".hide")
  hiddenElements.forEach((el) => observer.observe(el))
})
</script>
<template>
  <div id="contact" class="h-max grid place-items-center">
    <div
      class="container px-6 py-4 flex flex-col gap-4 md:gap-0 md:flex-row h-full"
    >
      <div class="w-full md:w-1/2 p-4 flex flex-col justify-around gap-4">
        <div class="w-full rounded-md bg-gray-300 dark:bg-gray-800 hide">
          <div class="flex flex-col px-4 py-2 gap-4">
            <p class="text-gray-500">Office</p>
            <div class="flex flex-col gap-2">
              <p>office@metana.net</p>
              <p>order@metana.net</p>
            </div>
          </div>
        </div>
        <div class="w-full rounded-md bg-gray-300 dark:bg-gray-800 hide">
          <div class="flex flex-col px-4 py-2 gap-4">
            <div class="flex justify-between">
              <h2>Anna Kruszona</h2>
              <p class="text-gray-500">CEO/Owner</p>
            </div>
            <div class="flex flex-col gap-1">
              <p>+48 503 050 856</p>
              <p>anna.kruszona@metana.net</p>
            </div>
          </div>
        </div>
        <div class="w-full rounded-md bg-gray-300 dark:bg-gray-800 hide">
          <div class="flex flex-col px-4 py-2 gap-4">
            <div class="flex justify-between">
              <h2>Kamil Kruszona</h2>
              <p class="text-gray-500">CIO</p>
            </div>
            <div class="flex flex-col gap-1">
              <p>+48 503 932 347</p>
              <p>kamil.kruszona@metana.net</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[40rem] md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.1775950008014!2d18.709886106534025!3d50.53086726198464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d8f61716ca79%3A0x391222969e93039d!2sMetana%20Sp.k.!5e0!3m2!1spl!2spl!4v1698685660934!5m2!1spl!2spl"
          class="w-full h-full rounded-md hide"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<style>
.hide {
  transform: perspective(1000px) scale(0.75);
  opacity: 0.5;
  transition: transform 0.3s ease-in-out, opacity 0.25s ease-in-out;
}
.show-contact {
  transform: scale(1);
  opacity: 1;
}
</style>
