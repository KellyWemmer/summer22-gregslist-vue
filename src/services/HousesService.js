import { AppState } from "../AppState.js";
import { server } from "./AxiosService.js";
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js";

class HousesService {
    async getHouses() {
        let res = await server.get('api/houses')
        logger.log("Got these houses?", res.data)
        AppState.houses = res.data.map(h => new House(h))
    }

    async createHouse(houseFormData) {
        let res = await server.post('api/houses', houseFormData)
        let house = new House(res.data)
        AppState.houses = [...AppState.houses, house]
    }

    async deleteHouse(houseId) {
        let url = `api/houses/${houseId}`
        await server.delete(url)
        AppState.houses = AppState.houses.filter(h => h.id != houseId)
    }

    async editHouse(houseData) {
        let res = await server.put(`api/houses/${houseData.id}`, houseData)
        let house = new House(res.data)
        let houseIndex = AppState.houses.findIndex(h => h.id ==houseData.id)
        AppState.house.splice(houseIndex, 1, house)
    }

    
}

export const housesService = new HousesService()