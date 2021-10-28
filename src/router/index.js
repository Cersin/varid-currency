import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App";
import CurrencyConverter from "@/views/CurrencyConverter";
import CurrencyTable from "@/views/CurrencyTable";
import AddCurrency from "@/views/AddCurrency";

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    redirect: '/addCurrency',
    children: [
      {
        path: '/addCurrency',
        name: 'AddCurrency',
        component: AddCurrency
      },
      {
        path: '/currencyTable',
        name: 'CurrencyTable',
        component: CurrencyTable
      },
      {
        path: '/currencyConverter',
        name: 'CurrencyConverter',
        component: CurrencyConverter
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
