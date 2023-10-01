<template>
  <div class="box_all">
  <div class="col" v-for="(n,i) in travelList" :key="n">
    <div class="card" style="width: 25rem;" >
      <img :src="n.img" class="card-img-top">
      <div class="card-body">
        <h3 class="card-title">{{ n.name }}</h3>
        <p>BookingPrice : {{n.price}}</p>
        <h6>Day & Hour: 10:30 – 20:00 น. | ทุกวันยกเว้นวันจันทร์</h6>

        <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> Booking </a>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
      {name:'PASSPORT BOOKSHOP',  price: 70, img:"https://images.shopspotter.in.th/wp-content/uploads/2018/05/14020607/22424163_1642207999134243_7706316708659060340_o-1024x768.jpg", quantity: 0 ,
      text_box:'Location : ถนนพระสุเมรุ บวรนิเวศ พระนคร กรุงเทพมหานคร 10200 '
      }])

</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>