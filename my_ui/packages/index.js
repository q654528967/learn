import Button from './button'
import CheckboxGroup from './checkbox-group'
import Checkbox from './checkbox'
import Dialog from './dialog'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'

const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
