import Vue from 'vue'
import dayjs from '@nuxtjs/dayjs'

dayjs.locale('en')
Vue.use(dayjs)

export default function({ $dayjs }) {
  console.log($dayjs().format('LL'))
}
