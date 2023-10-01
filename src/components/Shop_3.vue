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
      {name:'Blue Door l ประตูสีฟ้า', price: 90, img:'https://images.shopspotter.in.th/wp-content/uploads/2018/05/14020752/31935445_2062728317090231_7673280062979833856_o.jpg', quantity: 0 ,
      text_box:'Location : 4 ซอยพระรามเก้า 54 ถนนพระรามเก้าตัดใหม่ แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร '
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