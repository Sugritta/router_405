import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainPage.vue'
import Total_shop from '../components/Total_shop.vue'

import Shop_1 from '../components/Shop_1.vue';
import Shop_2 from '../components/Shop_2.vue';
import Shop_3 from '../components/Shop_3.vue';
import Shop_4 from '../components/Shop_4.vue';





const shopRoutes = [
  { name: 'news_1', component: Shop_1, shop: 'A BOOK with NO NAME' },
  { name: 'news_2', component: Shop_2, shop: 'PASSPORT BOOKSHOP' },
  { name: 'news_3', component: Shop_3, shop: 'Blue Door l ประตูสีฟ้า'},
  { name: 'news_4', component: Shop_4, shop: 'The Authors'},
 
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/shops',
    name: 'Total_Shop',
    component: Total_shop
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/shops/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
