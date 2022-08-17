<template>
  <div class="hover-car selectable my-3" :title="car.make">
    <router-link :to="{ name: 'Car', params: { carId: car.id } }">
      <img class="img-fluid" :src="car.img" alt="">
    </router-link>
    <!-- commented out to just show picture on homepage -->
    <!-- <div class="p-2">
        <h4 class="text-center">{{ car.make }} | {{ car.model }} | {{ car.year }}</h4>
        <p>{{ car.description }}</p>
        <p class="text-end text-success m-0">$<b>{{ car.price }}</b></p>
        <button class="btn btn-info" @click="adjustCar(car)" data-bs-toggle="modal" data-bs-target="#car-form">Adjust
          Car Settings</button>
        <button class="btn btn-danger" @click="deleteCar(car)">delete me</button>
      </div> -->
  </div>
</template>


<script>
import { Car } from '../models/Car.js';
import { carsService } from '../services/CarsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    car: { type: Car, required: true }
  },
  setup() {
    return {
      adjustCar(car) {
        carsService.setActiveCar(car)
      },
      async deleteCar(car) {
        try {
          const yes = await Pop.confirm('Delete the car?')
          if (!yes) { return }
          await carsService.deleteCar(car.id)
        } catch (error) {
          logger.error('[Deleting Car]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.hover-car {
  transition: all .15s linear;

  &:hover {
    transform: translateY(2px);
    border-radius: 10px;
  }

}
</style>
