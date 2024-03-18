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
        <div class="w-full rounded-md bg-gray-200 dark:bg-gray-900 hide">
          <div class="flex justify-between">
            <div class="flex flex-col px-4 py-2 gap-3">
              <p class="opacity-75">
                {{ $t("contact.office.title") }}
              </p>
              <div>
                <p>Metana Sp. z o.o. Sp. K.</p>
                <p>Młyńska 1</p>
                <p>42-690 Tworóg</p>
              </div>
              <div>
                <a
                  :href="
                    'mailto:' + $t('contact.office.mail') + '@' + $t('mail')
                  "
                >
                  {{ $t("contact.office.mail") }}@{{ $t("mail") }}
                </a>
                <p>NIP: 5482500613</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full rounded-md bg-gray-200 dark:bg-gray-900 hide">
          <div class="flex flex-col px-4 py-2 gap-4">
            <div class="flex justify-between">
              <h2>
                {{ $t("contact.ceo.name") }}
              </h2>
              <p class="opacity-75">
                {{ $t("contact.ceo.title") }}
              </p>
            </div>
            <div class="flex flex-col gap-1">
              <a :href="'tel:' + $t('contact.ceo.numberLink')">
                {{ $t("contact.ceo.number") }}
              </a>
              <a :href="'mailto:' + $t('contact.ceo.mail') + '@' + $t('mail')">
                {{ $t("contact.ceo.mail") }}@{{ $t("mail") }}
              </a>
            </div>
          </div>
        </div>
        <div class="w-full rounded-md bg-gray-200 dark:bg-gray-900 hide">
          <div class="flex flex-col px-4 py-2 gap-4">
            <div class="flex justify-between gap-2">
              <h2 class="flex-1 whitespace-nowrap">
                {{ $t("contact.cto.name") }}
              </h2>
              <p class="opacity-75 text-right">
                {{ $t("contact.cto.title") }}
              </p>
            </div>
            <div class="flex flex-col gap-1">
              <a :href="'tel:' + $t('contact.cto.numberLink')">
                {{ $t("contact.cto.number") }}
              </a>
              <a :href="'mailto:' + $t('contact.cto.mail') + '@' + $t('mail')">
                {{ $t("contact.cto.mail") }}@{{ $t("mail") }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[40rem] md:w-1/2">
        <iframe
          sandbox="allow-scripts allow-same-origin"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.1775950008014!2d18.709886106534025!3d50.53086726198464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d8f61716ca79%3A0x391222969e93039d!2sMetana%20Sp.k.!5e0!3m2!1spl!2spl!4v1698685660934!5m2!1spl!2spl"
          class="w-full h-full rounded-md hide"
          title="Map to metana"
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
