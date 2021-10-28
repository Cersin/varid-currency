import { createRouter, createWebHistory } from 'vue-router'
import AddCurrency from "../views/AddCurrency";
import CurrencyConverter from "@/views/CurrencyConverter";
import CurrencyTable from "@/views/CurrencyTable";

const routes = [
  {
    path: '/',
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
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
