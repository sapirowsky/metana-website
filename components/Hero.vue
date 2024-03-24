<script setup></script>
<template>
  <div
    id="home"
    class="flex items-center justify-center md:min-h-[calc(100vh-64px)]"
  >
    <div class="container px-6 py-2 2xl:max-w-screen-xl">
      <div
        class="flex h-full w-full flex-col-reverse items-center justify-center gap-6 md:mt-0 md:flex-row md:gap-0"
      >
        <div class="flex flex-col justify-center gap-2 md:flex-[2]">
          <h1 class="text-4xl font-bold md:text-5xl">
            {{ $t("hero.heading") }}
          </h1>
          <div class="flex items-center gap-4">
            <div class="w-4 rounded border border-gray-500"></div>
            <p class="text-lg italic text-[#0071bc] md:text-2xl">
              {{ $t("hero.question") }}
            </p>
          </div>
          <p class="text-xl md:text-2xl">
            {{ $t("hero.answer") }}
          </p>
          <div class="mt-2 flex gap-2">
            <a href="#about-us">
              <button
                class="btn btn-outline border border-[#0071bc] bg-[#0071bc] font-sans text-gray-100 hover:bg-transparent hover:text-[#0071bc]"
              >
                {{ $t("hero.learnMore") }}
              </button>
            </a>
            <a href="#contact">
              <button
                class="btn btn-outline border border-[#0071bc] font-sans text-[#0071bc] hover:border-[#005289] hover:bg-[#0071bc] hover:text-white"
              >
                {{ $t("hero.contact") }}
              </button>
            </a>
          </div>
        </div>
        <div
          class="relative flex aspect-square w-3/4 items-center justify-center md:flex-[2]"
        >
          <div
            class="custom-bg-border h-5/6 w-5/6 overflow-hidden bg-[#0071bc]"
          >
            <LazyModelContainer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-bg-border {
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
  -webkit-box-shadow: 0px 0px 40px -7px rgba(0, 212, 255, 1);
  -moz-box-shadow: 0px 0px 40px -7px rgba(0, 212, 255, 1);
  box-shadow: 0px 0px 40px -7px rgba(0, 212, 255, 1);
}
@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
</style>
