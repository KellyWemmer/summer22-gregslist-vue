<template>
    <div class="houses-page">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="h in houses" :key="h.id">
                    <HouseCard :house="h" />
                </div>
            </div>

        </div>
        <button>
            Add House
        </button>
    </div>
    <!-- Modal -->
</template>
<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState';
import { housesService } from '../services/HousesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {
        logger.log("test")
        async function getHouses() {
            try {logger.log("getting houses")
                await housesService.getHouses()
            }   catch (error) {
                logger.error('[Getting Houses]', error)
                Pop.error            
            }
        }

        onMounted(() => {
            getHouses()
        })
        
        return {
            houses: computed(() => AppState.houses)
        };
    },
};
</script>
<style> 
</style>