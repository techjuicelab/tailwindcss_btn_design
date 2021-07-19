import { computed, reactive } from "vue";

const effect = reactive({
  shadow: 1,
  hoverScale: 7,
  activeScale: 6,
  transitionDuration: 3,
  transitionTiming: 'ease-out',
  transitionDelay: 0,
})

const btnShadow = computed(() => {
  switch(Number(effect.shadow)){
    case 0: return 'shadow-' + 'none'
    case 1: return 'shadow-' + 'sm'
    case 2: return 'shadow-' + 'md'
    case 3: return 'shadow-' + 'lg'
    case 4: return 'shadow-' + 'xl'
    case 5: return 'shadow-' + '2xl'
  }
})

const btnHoverScale = computed(() => {
  switch(Number(effect.hoverScale)){
    case 0: return 'hover:scale-' + '0'
    case 1: return 'hover:scale-' + '50'
    case 2: return 'hover:scale-' + '75'
    case 3: return 'hover:scale-' + '90'
    case 4: return 'hover:scale-' + '95'
    case 5: return 'hover:scale-' + '100'
    case 6: return 'hover:scale-' + '105'
    case 7: return 'hover:scale-' + '110'
    case 8: return 'hover:scale-' + '125'
    case 9: return 'hover:scale-' + '150'
  }
})
const btnActiveScale = computed(() => {
  switch(Number(effect.activeScale)){
    case 0: return 'active:scale-' + '0'
    case 1: return 'active:scale-' + '50'
    case 2: return 'active:scale-' + '75'
    case 3: return 'active:scale-' + '90'
    case 4: return 'active:scale-' + '95'
    case 5: return 'active:scale-' + '100'
    case 6: return 'active:scale-' + '105'
    case 7: return 'active:scale-' + '110'
    case 8: return 'active:scale-' + '125'
    case 9: return 'active:scale-' + '150'
  }
})

const btnDuration = computed(() => {
  switch(Number(effect.transitionDuration)){
    case 0: return 'duration-' + '75'
    case 1: return 'duration-' + '100'
    case 2: return 'duration-' + '150'
    case 3: return 'duration-' + '200'
    case 4: return 'duration-' + '300'
    case 5: return 'duration-' + '500'
    case 6: return 'duration-' + '700'
    case 7: return 'duration-' + '1000'
  }
})
const btnDelay = computed(() => {
  switch(Number(effect.transitionDelay)){
    case 0: return 'delay-' + '75'
    case 1: return 'delay-' + '100'
    case 2: return 'delay-' + '150'
    case 3: return 'delay-' + '200'
    case 4: return 'delay-' + '300'
    case 5: return 'delay-' + '500'
    case 6: return 'delay-' + '700'
    case 7: return 'delay-' + '1000'
  }
})

export default { effect, btnShadow, btnHoverScale, btnActiveScale, btnDuration, btnDelay, }