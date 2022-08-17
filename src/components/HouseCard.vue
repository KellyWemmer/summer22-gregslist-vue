<template>
    <div class="card elevation-2">
    <div class="card-body">
      <img class="img-fluid" :src="house.imgUrl" alt="">
      <div class="p-2">
        <h4 class="text-center">{{ house.bedrooms }} | {{ house.bedrooms }} | {{ house.year }}</h4>
        <p>{{ house.description }}</p>
        <p class="text-end text-success m-0">$<b>{{ house.price }}</b></p>
        <button class="btn btn-info" @click="adjustHouse(house)" data-bs-toggle="modal" data-bs-target="#house-form">Adjust
          House Settings</button>
        <button class="btn btn-danger" @click="deleteHouse(house)">delete me</button>
      </div>
    </div>
  </div>
</template>
<script>
import { House } from '../Models/House';

export default {
    props: {
        house: {type: House, required: true}
    },
    setup() {
        return {

        };
    },
};
</script>
<style> 
</style>
