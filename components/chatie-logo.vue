<template>
  <div class="container flex flex-row items-center">
    <svg
      class="mt-1 mr-1"
      width="36px"
      height="36px"
      viewBox="0 0 96 96"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVG" class="fill-none">
        <g id="Chat-Bubble" transform="translate(0.000000, 10.000000)">
          <path
            id="Path"
            class="fill-accent"
            d="M11.9502407,59.7512037 C5.35030503,59.7512037 0,54.4008987 0,47.800963 L0,11.9502407 C0,5.35030503 5.35030503,0 11.9502407,0 L83.6516852,0 C90.251621,0 95.601926,5.35030503 95.601926,11.9502407 L95.601926,47.800963 C95.601926,54.4008987 90.251621,59.7512037 83.6516852,59.7512037 L47.7983832,59.7512037 L43.9851373,62.3162295 C33.5125252,69.3014133 25.8583813,73.8862904 21.0227056,76.0708608 L20.1986085,76.4314566 C19.356837,76.7491704 18.9859547,77.1446535 18.454368,76.9469119 C18.0290987,76.7887187 17.9440448,76.5537432 17.927034,76.207085 L17.9227813,59.7512037 L11.9502407,59.7512037 Z"
          />
          <circle
            id="Oval"
            class="fill-white"
            cx="17.9253611"
            cy="29.8756019"
            r="5.97512037"
          />
          <circle
            id="Oval-Copy"
            class="fill-white"
            cx="77.6765649"
            cy="29.8756019"
            r="5.97512037"
          />
          <circle
            id="Oval-Copy-2"
            class="fill-white"
            cx="47.800963"
            cy="29.8756019"
            r="5.97512037"
          />
        </g>
      </g>
    </svg>
    <NuxtLink
      to="/"
      class="relative inline no-underline after:duration-500 after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom after:transition-all hover:after:scale-x-100 hover:after:origin-bottom"
    >
      <h2 class="font-sans text-2xl font-bold">
        Chat<span id="accent">ie</span>
      </h2>
    </NuxtLink>
  </div>
</template>
