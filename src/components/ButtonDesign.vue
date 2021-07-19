<template>
  <div class="max-w-md mx-auto text-center">

    <div class="py-6 text-3xl text-blue-900">Tailwindcss Button Design</div>

    <!-- Button -->
    <div class="h-48 border rounded-lg shadow-lg flex justify-center items-center bg-white">
      <button id="btnColor" class="text-center box-content overflow-hidden transform transition" :class="[ btnColor.bg, btnColor.hoverBg, btnColor.activeBg, btnColor.border, btnColor.hoverBorder, btnColor.activeBorder, btnColor.text, btnColor.hoverText, btnColor.activeText, btnH, btnW, btnPadX, btnPadY, btnMarX, btnMarY, btnTextSize, btnBorder, btnRounded, btnShadow, btnHoverScale, btnActiveScale, btnDuration, effect.transitionTiming, btnDelay, ]">Button</button>
    </div>

    <!-- Menu -->
    <div class="my-6 flex flex-col px-2 space-y-2">
      <div class="flex">
        <button @click.prevent="colorPanel" class="flex-1 text-white my-auto px-6 py-2 bg-blue-500 active:bg-blue-400 rounded-l-lg border-l-2 border-t-2 border-b-2 border-blue-600 hover:bg-blue-600">Color</button>
        <button @click.prevent="shapePanel" class="flex-1 text-white my-auto px-6 py-2 bg-blue-500 active:bg-blue-400 border-2 border-blue-600 hover:bg-blue-600">Shape</button>
        <button @click.prevent="effectPanel" class="flex-1 text-white my-auto px-6 py-2 bg-blue-500 active:bg-blue-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-blue-600 hover:bg-blue-600">Effect</button>
      </div>
    </div>

    <!-- Color Panel -->
    <div v-if="currentPanel === 'color'" class="flex flex-col p-6 border gap-3 rounded-lg shadow-lg bg-blue-50">

      <div class="py-1 text-3xl">Color</div>

      <!-- Options -->
      <div class="flex flex-col gap-2 py-2">
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Background  : </div>
          <button @click.prevent="pickBg" :class="btnColor.bg" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Hover-Background  : </div>
          <button @click.prevent="pickHoverBg" :class="btnColor.hoverBg.replace('hover:', '')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Active-Background  : </div>
          <button @click.prevent="pickActiveBg" :class="btnColor.activeBg.replace('active:', '')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Border  : </div>
          <button @click.prevent="pickBorder" :class="btnColor.border.replace('border-', 'bg-')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Hover Border  : </div>
          <button @click.prevent="pickHoverBorder" :class="btnColor.hoverBorder.replace('hover:border-', 'bg-')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Active Border  : </div>
          <button @click.prevent="pickActiveBorder" :class="btnColor.activeBorder.replace('active:border-', 'bg-')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Text  : </div>
          <button @click.prevent="pickText" :class="btnColor.text.replace('text-', 'bg-')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Hover Text  : </div>
          <button @click.prevent="pickHoverText" :class="btnColor.hoverText.replace('hover:text-', 'bg-')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
        <div class="flex justify-between h-6 items-center px-8 rounded-md">
          <div class="text-lg">Active Text  : </div>
          <button @click.prevent="pickActiveText" :class="btnColor.activeText.replace('active:text-', 'bg-')" class="h-8 w-8 flex items-center justify-center border rounded-md transform hover:scale-110 active:scale-105 focus:border-4 focus:border-red-600"></button>
        </div>
      </div>

      <!-- Colors -->
      <div class="flex flex-col gap-2 p-4">
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'white'" class="rounded-md h-8 flex-1 border bg-white transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'black'" class="rounded-md h-8 flex-1 border bg-black transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'gray-50'" class="rounded-md h-8 flex-1 border bg-gray-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-100'" class="rounded-md h-8 flex-1 border bg-gray-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-200'" class="rounded-md h-8 flex-1 border bg-gray-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-300'" class="rounded-md h-8 flex-1 border bg-gray-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-400'" class="rounded-md h-8 flex-1 border bg-gray-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-500'" class="rounded-md h-8 flex-1 border bg-gray-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-600'" class="rounded-md h-8 flex-1 border bg-gray-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-700'" class="rounded-md h-8 flex-1 border bg-gray-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-800'" class="rounded-md h-8 flex-1 border bg-gray-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'gray-900'" class="rounded-md h-8 flex-1 border bg-gray-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'red-50'" class="rounded-md h-8 flex-1 border bg-red-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-100'" class="rounded-md h-8 flex-1 border bg-red-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-200'" class="rounded-md h-8 flex-1 border bg-red-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-300'" class="rounded-md h-8 flex-1 border bg-red-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-400'" class="rounded-md h-8 flex-1 border bg-red-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-500'" class="rounded-md h-8 flex-1 border bg-red-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-600'" class="rounded-md h-8 flex-1 border bg-red-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-700'" class="rounded-md h-8 flex-1 border bg-red-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-800'" class="rounded-md h-8 flex-1 border bg-red-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'red-900'" class="rounded-md h-8 flex-1 border bg-red-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'yellow-50'" class="rounded-md h-8 flex-1 border bg-yellow-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-100'" class="rounded-md h-8 flex-1 border bg-yellow-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-200'" class="rounded-md h-8 flex-1 border bg-yellow-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-300'" class="rounded-md h-8 flex-1 border bg-yellow-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-400'" class="rounded-md h-8 flex-1 border bg-yellow-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-500'" class="rounded-md h-8 flex-1 border bg-yellow-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-600'" class="rounded-md h-8 flex-1 border bg-yellow-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-700'" class="rounded-md h-8 flex-1 border bg-yellow-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-800'" class="rounded-md h-8 flex-1 border bg-yellow-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'yellow-900'" class="rounded-md h-8 flex-1 border bg-yellow-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'green-50'" class="rounded-md h-8 flex-1 border bg-green-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-100'" class="rounded-md h-8 flex-1 border bg-green-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-200'" class="rounded-md h-8 flex-1 border bg-green-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-300'" class="rounded-md h-8 flex-1 border bg-green-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-400'" class="rounded-md h-8 flex-1 border bg-green-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-500'" class="rounded-md h-8 flex-1 border bg-green-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-600'" class="rounded-md h-8 flex-1 border bg-green-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-700'" class="rounded-md h-8 flex-1 border bg-green-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-800'" class="rounded-md h-8 flex-1 border bg-green-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'green-900'" class="rounded-md h-8 flex-1 border bg-green-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'blue-50'" class="rounded-md h-8 flex-1 border bg-blue-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-100'" class="rounded-md h-8 flex-1 border bg-blue-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-200'" class="rounded-md h-8 flex-1 border bg-blue-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-300'" class="rounded-md h-8 flex-1 border bg-blue-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-400'" class="rounded-md h-8 flex-1 border bg-blue-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-500'" class="rounded-md h-8 flex-1 border bg-blue-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-600'" class="rounded-md h-8 flex-1 border bg-blue-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-700'" class="rounded-md h-8 flex-1 border bg-blue-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-800'" class="rounded-md h-8 flex-1 border bg-blue-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'blue-900'" class="rounded-md h-8 flex-1 border bg-blue-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'indigo-50'" class="rounded-md h-8 flex-1 border bg-indigo-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-100'" class="rounded-md h-8 flex-1 border bg-indigo-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-200'" class="rounded-md h-8 flex-1 border bg-indigo-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-300'" class="rounded-md h-8 flex-1 border bg-indigo-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-400'" class="rounded-md h-8 flex-1 border bg-indigo-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-500'" class="rounded-md h-8 flex-1 border bg-indigo-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-600'" class="rounded-md h-8 flex-1 border bg-indigo-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-700'" class="rounded-md h-8 flex-1 border bg-indigo-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-800'" class="rounded-md h-8 flex-1 border bg-indigo-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'indigo-900'" class="rounded-md h-8 flex-1 border bg-indigo-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'purple-50'" class="rounded-md h-8 flex-1 border bg-purple-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-100'" class="rounded-md h-8 flex-1 border bg-purple-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-200'" class="rounded-md h-8 flex-1 border bg-purple-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-300'" class="rounded-md h-8 flex-1 border bg-purple-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-400'" class="rounded-md h-8 flex-1 border bg-purple-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-500'" class="rounded-md h-8 flex-1 border bg-purple-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-600'" class="rounded-md h-8 flex-1 border bg-purple-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-700'" class="rounded-md h-8 flex-1 border bg-purple-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-800'" class="rounded-md h-8 flex-1 border bg-purple-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'purple-900'" class="rounded-md h-8 flex-1 border bg-purple-900 transform hover:scale-110 active:scale-105"></button>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button @click.prevent="pickedC.color = 'pink-50'" class="rounded-md h-8 flex-1 border bg-pink-50 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-100'" class="rounded-md h-8 flex-1 border bg-pink-100 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-200'" class="rounded-md h-8 flex-1 border bg-pink-200 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-300'" class="rounded-md h-8 flex-1 border bg-pink-300 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-400'" class="rounded-md h-8 flex-1 border bg-pink-400 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-500'" class="rounded-md h-8 flex-1 border bg-pink-500 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-600'" class="rounded-md h-8 flex-1 border bg-pink-600 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-700'" class="rounded-md h-8 flex-1 border bg-pink-700 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-800'" class="rounded-md h-8 flex-1 border bg-pink-800 transform hover:scale-110 active:scale-105"></button>
          <button @click.prevent="pickedC.color = 'pink-900'" class="rounded-md h-8 flex-1 border bg-pink-900 transform hover:scale-110 active:scale-105"></button>
        </div>
      </div>

    </div>

    <!-- Shape Panel -->
    <div v-if="currentPanel === 'shape'" class="flex flex-col p-6 border gap-3 rounded-lg shadow-lg bg-blue-50">
      <div class="py-1 text-3xl">Shape</div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Height</div>
        <input v-model="shape.height" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="8" max="96" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Width</div>
        <input v-model="shape.width" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="8" max="96" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Test Size</div>
        <input v-model="shape.textSize" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="1" max="13" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Border</div>
        <input v-model="shape.border" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="8" step="2">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Rounded</div>
        <input v-model="shape.rounded" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="8" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Padding X</div>
        <input v-model="shape.paddingX" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="36" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Padding Y</div>
        <input v-model="shape.paddingY" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="36" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Margin X</div>
        <input v-model="shape.marginX" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="36" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Margin Y</div>
        <input v-model="shape.marginY" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="36" step="1">
      </div>
    </div>

    <!-- Effect Panel -->
    <div v-if="currentPanel === 'effect'" class="flex flex-col p-6 border gap-3 rounded-lg shadow-lg bg-blue-50">
      <div class="py-1 text-3xl">Effect</div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Shadow</div>
        <input v-model="effect.shadow" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="5" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Hover Scale</div>
        <input v-model="effect.hoverScale" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="9" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Active Scale</div>
        <input v-model="effect.activeScale" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="9" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Transition Duration</div>
        <input v-model="effect.transitionDuration" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="7" step="1">
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Transition Timing</div>
        <select class="w-32 h-8 border rounded-lg px-4" v-model="effect.transitionTiming">
          <option value="ease-linear">ease-linear</option>
          <option value="ease-in">ease-in</option>
          <option value="ease-out" selected>ease-out</option>
          <option value="ease-in-out">ease-in-out</option>
        </select>
      </div>
      <div class="flex justify-between items-center px-4 mt-2">
        <div class="text-lg">Transition Delay</div>
        <input v-model="effect.transitionDelay" class="w-48 appearance-none bg-blue-100 rounded-lg h-4" type="range" name="" min="0" max="7" step="1">
      </div>
    </div>

    <!-- Copy tag button -->
    <div class="flex justify-center mt-4">
      <button @click.prevent="copyBtnDesign" class="border-2 border-red-200 my-auto px-6 py-2 rounded-2xl shadow-lg active:bg-red-400 bg-red-500 text-white transform hover:scale-110 active:scale-105 transition">COPY TAG</button>
    </div>
    
    <div class="relative mt-4">
      <transition
        enter-from-class="opacity-0 -translate-y-10"
        enter-active-class="transition-all ease-in-out duration-1000"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-active-class="transition-all ease-in-out duration-1000"
        leave-to-class="opacity-0 translate-y-10"
      >
      <div v-if="copied" class="absolute w-2/3 top-1/2 left-1/2 right-1/2 transform -translate-x-1/2 bg-red-100 border-2 rounded-lg border-red-300 text-red-500 py-3 flex justify-center text-xl items-center gap-4">
        Copied Successfully
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      </div>
      </transition>
    </div>

    <!-- Caution -->
    <div class="mb-12">
      <div class="text-lg py-2">Make sure you add <span class="italic text-xl text-red-500">variants</span> on tailwind config file.</div>
      <div class="text-left flex justify-center py-4 mx-6 border-2 border-blue-400 rounded-md  text-red-600">
        variants: {<br>
          &emsp;extend: {<br>
            &emsp;&emsp;backgroundColor: ['active'],<br>
            &emsp;&emsp;borderColor: ['active'],<br>
            &emsp;&emsp;textColor: ['active'],<br>
          &emsp;}<br>
        },
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Color from '../store/button/color'
import Shape from '../store/button/shape'
import Effect from '../store/button/effect'

export default defineComponent({
  setup () {
    const currentPanel = ref('effect')
    const colorPanel = () => {
      currentPanel.value = 'color'
    }
    const shapePanel = () => {
      currentPanel.value = 'shape'
    }
    const effectPanel = () => {
      currentPanel.value = 'effect'
    }

    const { pickedC, btnColor, pickBg, pickHoverBg, pickActiveBg, pickBorder, pickHoverBorder, pickActiveBorder, pickText, pickHoverText, pickActiveText } = Color

    const { shape, btnH, btnW, btnPadX, btnPadY, btnMarX, btnMarY, btnTextSize, btnBorder, btnRounded, } = Shape

    const { effect, btnShadow, btnHoverScale, btnActiveScale, btnDuration, btnDelay, } = Effect

    const copied = ref(false)

    const copyBtnDesign = () => {
      try {
        const btnColor = document.getElementById('btnColor') as HTMLElement
        // create textarea
        const area = document.createElement('textarea')
        document.body.appendChild(area)
        // copy button html tag to textarea
        area.value = btnColor.outerHTML
        // select textarea
        area.select()
        // copy to clipboard
        document.execCommand('copy')
        // remove textarea
        document.body.removeChild(area)

        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2500)
        
      } catch {
        alert('Something wrong!')
      }
    }

    return { 
      currentPanel, colorPanel, shapePanel, effectPanel, copyBtnDesign, 
      copied,
      pickedC, btnColor, pickBg, pickHoverBg, pickActiveBg, pickBorder, pickHoverBorder, pickActiveBorder, pickText, pickHoverText, pickActiveText,
      shape, btnH, btnW, btnPadX, btnPadY, btnMarX, btnMarY, btnTextSize, btnBorder, btnRounded, btnShadow,
      effect, btnHoverScale, btnActiveScale, btnDuration, btnDelay,
    }
  }
})
</script>