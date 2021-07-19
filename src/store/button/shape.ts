import { computed, reactive, ref } from "vue"

const shape = reactive({
  height: 12,
  width: 24,
  textSize: 3,
  border: 4,
  rounded: 4,
  paddingX: 0,
  paddingY: 0,
  marginX: 0,
  marginY: 0,
})

const btnH = computed(() => {
  return arrSize8To96('h', shape.height)
})
const btnW = computed(() => {
  return arrSize8To96('w', shape.width)
})
const btnTextSize = computed(() => {
  return arrSizeXsTo9xl('text', shape.textSize)
})
const btnBorder = computed(() => {
  switch(Number(shape.border)){
    case 0: return 'border' + '-0'
    case 2: return 'border'
    case 4: return 'border' + '-2'
    case 6: return 'border' + '-4'
    case 8: return 'border' + '-8'
  }
})
const btnRounded = computed(() => {
  switch(Number(shape.rounded)){
    case 0: return 'rounded-' + 'none'
    case 1: return 'rounded-' + 'sm'
    case 2: return 'rounded-'
    case 3: return 'rounded-' + 'md'
    case 4: return 'rounded-' + 'lg'
    case 5: return 'rounded-' + 'xl'
    case 6: return 'rounded-' + '2xl'
    case 7: return 'rounded-' + '3xl'
    case 8: return 'rounded-' + 'full'
  }
})


const btnPadX = computed(() => {
  return arrSize0To36('px', shape.paddingX)
})
const btnPadY = computed(() => {
  return arrSize0To36('py', shape.paddingY)
})

const btnMarX = computed(() => {
  return arrSize0To36('mx', shape.marginX)
})
const btnMarY = computed(() => {
  return arrSize0To36('my', shape.marginY)
})

const arrSize0To36 = (type: string, value: number) => {
  if(value === 0) {
    return type + '-0'
  } else if(value == 1) {
    return type + '-1'
  } else if(value == 2) {
    return type + '-2'
  } else if(value == 3) {
    return type + '-3'
  } else if(value == 4) {
    return type + '-4'
  } else if(value == 5) {
    return type + '-5'
  } else if(value == 6) {
    return type + '-6'
  } else if(value == 7) {
    return type + '-7'
  } else if(value == 8) {
    return type + '-8'
  } else if(value == 9) {
    return type + '-9'
  } else if(value == 10) {
    return type + '-10'
  } else if(value == 11) {
    return type + '-11'
  } else if(value >= 12 && value < 14) {
    return type + '-12'
  } else if(value >= 14 && value < 16) {
    return type + '-14'
  } else if(value >= 16 && value < 20) {
    return type + '-16'
  } else if(value >= 20 && value < 24) {
    return type + '-20'
  } else if(value >= 24 && value < 28) {
    return type + '-24'
  } else if(value >= 28 && value < 32) {
    return type + '-28'
  } else if(value >= 32 && value < 36) {
    return type + '-32'
  } else if(value >= 36 && value < 40) {
    return type + '-36'
  } 
}
const arrSize8To96 = (type: string, value: number) => {
  if(value === 8) {
    return type + '-8'
  } else if(value == 9) {
    return type + '-9'
  } else if(value == 10) {
    return type + '-10'
  } else if(value == 11) {
    return type + '-11'
  } else if(value >= 12 && value < 14) {
    return type + '-12'
  } else if(value >= 14 && value < 16) {
    return type + '-14'
  } else if(value >= 16 && value < 20) {
    return type + '-16'
  } else if(value >= 20 && value < 24) {
    return type + '-20'
  } else if(value >= 24 && value < 28) {
    return type + '-24'
  } else if(value >= 28 && value < 32) {
    return type + '-28'
  } else if(value >= 32 && value < 36) {
    return type + '-32'
  } else if(value >= 36 && value < 40) {
    return type + '-36'
  } else if(value >= 40 && value < 44) {
    return type + '-40'
  } else if(value >= 44 && value < 48) {
    return type + '-44'
  } else if(value >= 48 && value < 52) {
    return type + '-48'
  } else if(value >= 52 && value < 56) {
    return type + '-52'
  } else if(value >= 56 && value < 60) {
    return type + '-56'
  } else if(value >= 60 && value < 64) {
    return type + '-60'
  } else if(value >= 64 && value < 72) {
    return type + '-64'
  } else if(value >= 72 && value < 80) {
    return type + '-72'
  } else if(value >= 80 && value < 96) {
    return type + '-80'
  } else if(value == 96) {
    return type + '-96'
  }
}
const arrSizeXsTo9xl = (type: string, value: number) => {
  switch(Number(value)){
    case 1: return type + '-xs'
    case 2: return type + '-sm'
    case 3: return type + '-base'
    case 4: return type + '-lg'
    case 5: return type + '-xl'
    case 6: return type + '-2xl'
    case 7: return type + '-3xl'
    case 8: return type + '-4xl'
    case 9: return type + '-5xl'
    case 10: return type + '-6xl'
    case 11: return type + '-7xl'
    case 12: return type + '-8xl'
    case 13: return type + '-9xl'
  }
}

export default { shape, btnH, btnW, btnPadX, btnPadY, btnMarX, btnMarY, btnTextSize, btnBorder, btnRounded, }