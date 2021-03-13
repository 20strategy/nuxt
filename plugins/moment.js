import Vue from 'vue'
import moment from 'moment'

moment.locale('en')
Vue.use(moment)

export default function({ $moment }) {
  console.log($moment().format('LTS'))
}
