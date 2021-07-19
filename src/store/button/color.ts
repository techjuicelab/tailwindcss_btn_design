import { reactive, watch } from "vue"

const pickedC = reactive({
  type: 'bg-',
  color: 'gray-200'
})

const btnColor = reactive({
  bg: 'bg-gray-200',
  hoverBg: 'hover:bg-gray-400',
  activeBg: 'active:bg-gray-600',

  border: 'border-gray-300',
  hoverBorder: 'hover:border-gray-500',
  activeBorder: 'active:border-gray-700',

  text: 'text-black',
  hoverText: 'hover:text-white',
  activeText: 'active:text-gray-300',
})

const pickBg = () => {
  pickedC.type = 'bg-'
  pickedC.color = btnColor.bg.replace('bg-', '')
}
const pickHoverBg = () => {
  pickedC.type = 'hover:bg-'
  pickedC.color = btnColor.hoverBg.replace('hover:bg-', '')
}
const pickActiveBg = () => {
  pickedC.type = 'active:bg-'
  pickedC.color = btnColor.activeBg.replace('active:bg-', '')
}

const pickBorder = () => {
  pickedC.type = 'border-'
  pickedC.color = btnColor.border.replace('border-', '')
}
const pickHoverBorder = () => {
  pickedC.type = 'hover:border-'
  pickedC.color = btnColor.hoverBorder.replace('hover:border-', '')
}
const pickActiveBorder = () => {
  pickedC.type = 'active:border-'
  pickedC.color = btnColor.activeBorder.replace('active:border-', '')
}

const pickText = () => {
  pickedC.type = 'text-'
  pickedC.color = btnColor.text.replace('text-', '')
}
const pickHoverText = () => {
  pickedC.type = 'hover:text-'
  pickedC.color = btnColor.hoverText.replace('hover:text-', '')
}
const pickActiveText = () => {
  pickedC.type = 'active:text-'
  pickedC.color = btnColor.activeText.replace('active:text-', '')
}

watch(pickedC, (newValue, oldValue) => {
  switch(pickedC.type){
    case 'bg-':
      btnColor.bg = newValue.type + newValue.color
      break
    case 'hover:bg-':
      btnColor.hoverBg = newValue.type + newValue.color
      break
    case 'active:bg-':
      btnColor.activeBg = newValue.type + newValue.color
      break
    case 'border-':
      btnColor.border = newValue.type + newValue.color
      break
    case 'hover:border-':
      btnColor.hoverBorder = newValue.type + newValue.color
      break
    case 'active:border-':
      btnColor.activeBorder = newValue.type + newValue.color
      break
    case 'text-':
      btnColor.text = newValue.type + newValue.color
      break
    case 'hover:text-':
      btnColor.hoverText= newValue.type + newValue.color
      break
    case 'active:text-':
      btnColor.activeText = newValue.type + newValue.color
      break
  }
})

export default { pickedC, btnColor, pickBg, pickHoverBg, pickActiveBg, pickBorder, pickHoverBorder, pickActiveBorder, pickText, pickHoverText, pickActiveText }