import { ref, computed } from 'vue'

const createViewWatcher = (maxWidth) => {
  const view = ref(false)

  const updateView = () => {
    view.value = window.innerWidth <= maxWidth
  }

  updateView()

  const isView = computed(() => view.value)

  window.addEventListener('resize', updateView)

  return isView
}
const isMobileView = createViewWatcher(375)


export  { isMobileView }

