<template>
<div class="order-place">
    <div class="image-container">
        <img src="../assets/Group4132.png" alt="not found" />
    </div>
    <div class="title-container">
        <p>Order placed Successfully</p>
    </div>
    <div class="message-section">
        <p>hurray!!!your order is confirmed the order id is #{{orderNumber}}
            save the order id for further communication
        </p>
    </div>
    <div class="title-section">
        <div class="email-us">
            <p>Email-us</p>
        </div>
        <div class="contact-us">
            <p>Contact-us</p>
        </div>
        <div class="address">
            <p>Address</p>
        </div>
    </div>
    <div class="email-sec">
        <p>admin@bookstore.com</p>
    </div>
    <div class="contact-sec">
        <p>+918163475881</p>
    </div>
    <div class="address-sec">
        42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
        near Kumarakom restaurant, HSR Layout, Bangalore 560034
    </div>
    <router-link class="continue-shopping" to="/dashboard" tag="button">CONTINUE SHOPPING</router-link>
</div>
</template>

<script>
import service from '../service/User'
export default {
    data() {
        return {
            orderNumber: '',
        }
    },
    created() {
        service.mailSendSuccessfully().then(response => {
            console.log(typeof (this.orderNumber));
            (this.orderNumber = JSON.stringify(response.data))
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Orderplace.scss";
</style>
