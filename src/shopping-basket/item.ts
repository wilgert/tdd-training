export class Item {
  constructor(private price: number, private quantity: number) {
    if (quantity < 0) {
      throw new Error('Quantity cannot be negative');
    }
  }

  subtotal() {
    return this.price * this.quantity;
  }
}
