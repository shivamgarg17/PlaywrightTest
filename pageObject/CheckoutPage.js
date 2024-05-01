class CheckoutPage{
    constructor(page) {
        this.checkoutText= page.locator("text=Checkout");
        this.country = page.locator("")
    }

}
module.exports={CheckoutPage};
