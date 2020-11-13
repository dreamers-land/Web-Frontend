<template>
  <div class="home">
    <header class="flex justify-between py-3 px-2 mb-3 xl:mb-0 border-2 border-gray-500">
      <h1><a href="#" class="logo block w-32 md:w-56 h-40px bg-gray-500"></a></h1>
      <ul class="flex items-center">
        <li class="mr-6 xl:mr-10"><a class="py-2 px-4 bg-blue-900 hover:bg-green-500 rounded text-white" href="#">登入</a></li>
        <li class="mr-6 xl:mr-10"><a class="hover:text-gray-500" href="#"><i class="far fa-user-circle text-2xl"></i></a></li>
        <li class="xl:mr-10"><a class="hover:text-gray-500" href="#"><i class="far fa-bell text-2xl"></i></a></li>
      </ul>
    </header>
    <div class="carousel hidden xl:flex xl:justify-around items-center py-6 mb-6 border-2 border-gray-500 shadow-bottom">
      <a href="#"><img src="../assets/images/Vector-left.png" alt=""></a>
      <a class="xl:w-4/5" href="#"><img src="https://picsum.photos/1800/247?random=2" alt=""></a>
      <a href="#"><img src="../assets/images/Vector-right.png" alt=""></a>
    </div>
    <nav class="xl:w-90/100 xxl:w-95/100 max-w-screen-xxl mx-auto">
      <ul class="flex justify-around pt-3 pb-1 px-1 m-1 border-2 border-gray-500">
        <li class="w-1/4">
          <a href="#" class="flex flex-col items-center border-b-2 border-gray-500 focus:border-blue-900 focus:text-blue-900 hover:text-gray-500 pb-1">
            <i class="far fa-heart text-2xl"></i>
            <span>Views</span>
          </a>
        </li>
        <li class="w-1/4">
          <a href="#" class="flex flex-col items-center border-b-2 border-gray-500 focus:border-blue-900 focus:text-blue-900 hover:text-gray-500 pb-1">
            <i class="far fa-user text-2xl"></i>
            <span>Visitors</span>
          </a>
        </li>
        <li class="w-1/4">
          <a href="#" class="flex flex-col items-center border-b-2 border-gray-500 focus:border-blue-900 focus:text-blue-900 hover:text-gray-500 pb-1">
            <i class="far fa-star text-2xl"></i>
            <span>Like</span>
          </a>
        </li>
        <li class="w-1/4">
          <a href="#" class="flex flex-col items-center border-b-2 border-gray-500 focus:border-blue-900 focus:text-blue-900 hover:text-gray-500 pb-1">
            <i class="far fa-comment text-2xl"></i>
            <span>Comments</span>
          </a>
        </li>
      </ul>
    </nav>
    <main class="xl:w-90/100 xxl:w-95/100 max-w-screen-xxl mt-10 mb-8 mx-auto">
      <ul class="flex flex-wrap justify-center md:justify-start border-2 border-gray-500 mx-1 md:px-2% lg:px-1% xxl:px-1 pt-6">
        <li class="w-95/100 md:w-46/100 lg:w-31/100 xxl:w-23/100 self-start py-4 px-2 sm:px-6 md:px-4 lg:px-2 xl:px-4 md:mx-2% lg:mx-1% mb-4 border-2 border-gray-500 rounded-lg">
          <div class="flex items-center mb-5">
            <img class="rounded-full w-40px h-40px" src="https://i.pravatar.cc/40" alt="使用者頭像">
            <span class="text-gray-600 ml-4 mr-auto">Name</span>
            <span class="rounded-full text-center bg-gray-800 bg-opacity-8 py-1.5 px-3">起於2020/10/22</span>
          </div>
          <h2 class="flex justify-between mb-4">大家來做個可以大家一起許願的Monospace許願池吧！<a class="hover:text-gray-500" href="#"><i class="fas fa-share-alt text-2xl"></i></a></h2>
          <img class="w-full h-48" src="https://picsum.photos/200/500?random=1" alt="">
          <p class="mt-4">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu</p>
          <div class="flex items-center mt-4">
            <span class="rounded-full text-center bg-gray-800 bg-opacity-8 py-1.5 px-3 mr-2 sm:mr-5 xxl:mr-2">In Progress</span>
            <a class="mr-auto hover:text-gray-500" href="#"><i class="fas fa-user-plus"></i><span class="text-blue-700 ml-1.5">Join</span></a>
            <span class="text-blue-700">10 敲碗數</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home'
  // components: {
  //   HelloWorld
  // }
})
</script>
