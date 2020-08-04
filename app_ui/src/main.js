import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont.js'
import './assets/icon.css'
import './assets/fonts/font.scss'

import HmCheckboxGroup from './components/checkbox-group.vue'
import HmButton from './components/button.vue'
import HmDialog from './components/dialog.vue'
import HmInput from './components/input.vue'
import HmSwitch from './components/switch.vue'
import HmRadio from './components/radio.vue'
import HmRadioGroup from './components/radio-group.vue'
import HmCheckbox from './components/checkbox.vue'
import HmForm from './components/form.vue'
import HmFormItem from './components/form-item.vue'

Vue.config.productionTip = false

Vue.component(HmForm.name, HmForm)
Vue.component(HmFormItem.name, HmFormItem)
Vue.component(HmCheckboxGroup.name, HmCheckboxGroup)
Vue.component(HmCheckbox.name, HmCheckbox)
Vue.component(HmRadioGroup.name, HmRadioGroup)
Vue.component(HmSwitch.name, HmSwitch)
Vue.component(HmButton.name, HmButton)
Vue.component(HmDialog.name, HmDialog)
Vue.component(HmInput.name, HmInput)
Vue.component(HmRadio.name, HmRadio)
new Vue({
  render: (h) => h(App),
}).$mount('#app')