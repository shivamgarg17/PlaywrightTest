import {expect} from "@playwright/test";

class ApiUtils {
    constructor(apiContext) {
        this.apiContext = apiContext;
    }

    async getToken(loginPayload) {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: loginPayload
            });
        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        return loginResponse.token;
    }

    async createOrder(orderPayload, loginPayload) {
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': this.getToken(loginPayload),
                    'Content-type': 'application/json'
                },
            })
        const Response = await orderResponse.json();
        return Response.orders[0];
    }

    //

}

module.exports = {ApiUtils};
