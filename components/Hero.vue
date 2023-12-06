<script setup></script>
<template>
  <div
    id="home"
    class="md:min-h-[calc(100vh-64px)] flex justify-center items-center"
  >
    <div class="container 2xl:max-w-screen-xl px-6 py-2">
      <div
        class="w-full h-full flex flex-col-reverse md:flex-row gap-6 md:gap-0 items-center justify-center md:mt-0"
      >
        <div class="flex flex-col justify-center gap-2 md:flex-[2]">
          <h1 class="text-4xl md:text-6xl font-bold">
            {{ $t("hero.heading") }}
          </h1>
          <div class="flex items-center gap-4">
            <div class="w-4 border rounded border-gray-500"></div>
            <p class="text-lg md:text-2xl text-[#0099ff] italic">
              {{ $t("hero.question") }}
            </p>
          </div>
          <p class="text-xl md:text-2xl">
            {{ $t("hero.answer") }}
          </p>
          <div class="flex gap-2 mt-2">
            <a href="#about-us">
              <button
                class="btn bg-[#0071bc] text-white hover:bg-[#0062a3] border-[#0071bc] hover:border-[#0062a3] hover:text-gray-200"
              >
                {{ $t("hero.learnMore") }}
              </button>
            </a>
            <a href="#contact">
              <button
                class="btn btn-outline border border-[#0071bc] text-[#0071bc] hover:bg-[#0071bc] hover:text-white hover:border-[#005289]"
              >
                {{ $t("hero.contact") }}
              </button>
            </a>
          </div>
        </div>
        <div
          class="w-3/4 aspect-square md:flex-[2] relative flex items-center justify-center"
        >
          <div class="w-5/6 h-5/6 overflow-hidden">
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
