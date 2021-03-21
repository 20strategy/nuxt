import Vue from 'vue'
import moment from 'moment/src/moment'

moment.locale('en')
Vue.use(moment)

export default function({ $moment }) {
  console.log($moment().format('LTS'))
}
