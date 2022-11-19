const db = require("../data/database");

class Order {
  constructor(cart, userData, status = "pending", date, orderId) {
    this.productData = cart;
    this.userData = userData;
    this.status = status;
    this.date = new Date(date);
    if (this.date) {
      this.formattedDate = this.date.toLocaleDateString("en-Us", {
        weekday: "short",
        dat: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    this.id = orderId;
  }

  save() {
    if (this.id) {
      //updating
    } else {
      const orderDocument = {
        userData: this.userData,
        productData: this.productData,
        data: new Date(),
        status: this.status,
      };

      return db.getDb().collection("orders").insertOne(orderDocument);
    }
  }
}

module.exports = Order;
