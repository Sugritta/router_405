<template>
  <div class="box_all">
  <div class="col" v-for="(n,i) in travelList" :key="n">
    <div class="card" style="width: 25rem;" >
      <img :src="n.img" class="card-img-top">
      <div class="card-body">
        <h3 class="card-title">{{ n.name }}</h3>
        <p>BookingPrice : {{n.price}}</p>
        <h6>Day & Hour: 10:00 - 19:00 PM l Everday</h6>

        <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> Booking </a>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
      {name:'The Author',  price: 120, img:"https://www.ryoiireview.com/upload/article/202205/1651741230_bb4959a0d6f23f76639f04ac5635ff87.jpg", quantity: 0 ,
      text_box:'Location : 511 The Walk Kaset-Nawamin ถนนประเสริฐมนูกิจ เขตลาดพร้าว กรุงเทพมหานคร'
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