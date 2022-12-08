import overlay from '@/view/public/components/popup/overlay.vue'
import dialog from '@/view/public/components/popup/dialog.vue'
import transition from '@/view/public/components/transition/transition.vue'

const pbOverlay = {
  install: Vue => { Vue.component('pbOverlay', overlay) }
}

const pbDialog = {
  install: Vue => { Vue.component('pbDialog', dialog) }
}

const pbTransition = {
  install: Vue => { Vue.component('pbTransition', transition) }
}

export {
  pbOverlay,
  pbDialog,
  pbTransition
}
