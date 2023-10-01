<template>

  <div class="row mb-2">
          <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary-emphasis">Cafe {{ i+1 }} </strong>
                <h3 class="mb-0">{{n.name}}</h3>
                <div class="mb-1 text-body-secondary">BookingPrice {{n.price}} baht</div>
                <p class="card-text mb-auto">{{n.text_box}}</p>
                
                <div style="margin-bottom: 30px;">
                <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">More information
               </RouterLink>
              </div>     
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" 
                focusable="false" 
                style="margin: 15px;" >
                  <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
                </svg>
              </div>
            </div>
          </div>
  
        
      </div>
  
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue';
  
  
  

  const travelList=ref([
     {name: 'A BOOK with NO NAME',  price: 80, img:"https://www.ryoiireview.com/upload/article/202306/1686911422_30e62fddc14c05988b44e7c02788e187.jpg", quantity: 0 ,
      text_box:' Location: 721-723 ซอยสามเสน 17 ถนนสามเสน แขวงถนนนครไชยศรี'
      },
  
    {name:'PASSPORT BOOKSHOP',  price: 70, img:"https://images.shopspotter.in.th/wp-content/uploads/2018/05/14020607/22424163_1642207999134243_7706316708659060340_o-1024x768.jpg", quantity: 0 ,
      text_box:'Location : ถนนพระสุเมรุ บวรนิเวศ พระนคร กรุงเทพมหานคร 10200 '
      },
    
    {name:'Blue Door l ประตูสีฟ้า', price: 90, img:'https://images.shopspotter.in.th/wp-content/uploads/2018/05/14020752/31935445_2062728317090231_7673280062979833856_o.jpg', quantity: 0 ,
      text_box:'Location : 4 ซอยพระรามเก้า 54 ถนนพระรามเก้าตัดใหม่ แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร '
      },
  
    {name:'The Author',  price: 120, img:"https://www.ryoiireview.com/upload/article/202205/1651741230_bb4959a0d6f23f76639f04ac5635ff87.jpg", quantity: 0 ,
      text_box:'Location : 511 The Walk Kaset-Nawamin ถนนประเสริฐมนูกิจ เขตลาดพร้าว กรุงเทพมหานคร'
      },
  ])
  
  </script>
<style scoped>
</style>
