
export class Car {
  constructor({ id, make, model, year, price, imgUrl, description }) {
    this.id = id
    this.make = make || ''
    this.model = model || ''
    this.year = year || 1999
    this.price = price || 1000
    this.img = imgUrl || ''
    this.description = description || ''
  }
}
