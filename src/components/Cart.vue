<template>
<div class="main">
    <div class="first-section">
        <div class="content">
            <!-- <h5>My Cart({{books.length}})</h5> -->
        </div>
        <div v-for="book in books" :key="book.id" class="container">

            <div class="mid-section">
                <img v-bind:src="book.file" alt="not found" class="checkout-img" style="height:85px;width:65px;">
                <p class="title-section">{{book.name}}</p>
            </div>
            <div class="author-section">
                <p class="author-name">by {{book.author}}</p>
            </div>
            <div class="price-section">
                <h6>Rs.{{book.price}}</h6>
            </div>
            <div class="icons">
                <i class="las la-minus-circle"></i>
                <input class="rectangle" value=1>
                <i class="las la-plus-circle"></i>
            </div>
        </div>
        <div class="btn-grps">
            <button class="btn" v-on:click="flip()" v-if="hide==true" type="submit">Place Order</button>
        </div>
    </div>
    <div class="second-section">
        <div class="details-box">
            <input type="text" v-if="hide==true" class="initial-btn" placeholder="Customer Details" />
        </div>
        <div v-if="hide==false" class="cutomer-detailsform">
            
            <form @submit.prevent="" class="form">
                <div class="customer-title">
                    Customer Details
                </div>
                <div class="form-name">
                    <input type="text" class="form-input" v-model="name" placeholder=" ">
                    <label for="" class="form-label">Name</label>
                </div>
                <div class="form-number">
                    <input type="text" class="form-input" v-model="phonenumber" placeholder=" ">
                    <label for="" class="form-label">PhoneNumber</label>
                </div>
                <div class="form-pin">
                    <input type="text" class="form-input" v-model="pincode" placeholder=" ">
                    <label for="" class="form-label">Pincode</label>
                </div>
                <div class="form-locality">
                    <input type="text" class="form-input" v-model="locality" placeholder=" ">
                    <label for="" class="form-label">Locality</label>
                </div>
                <div class="form-address">
                    <input type="text" class="form-input" v-model="address" placeholder=" ">
                    <label for="" class="form-label">Address</label>
                </div>
                <div class="form-city">
                    <input type="text" class="form-input" v-model="city" placeholder=" ">
                    <label for="" class="form-label">City/Town</label>
                </div>
                <div class="form-landmark">
                    <input type="text" class="form-input" v-model="landmark" placeholder=" ">
                    <label for="" class="form-label">Landmark</label>
                </div>
                <div class="address-type">
                    <p>Type</p>
                    <div class="radio-container">
                        <input type="radio" id="Home" value="Home" v-model="type">
                        <label class="label-radio" for="Home">Home</label>
                        <input type="radio" id="Work" value="Work" v-model="type">
                        <label class="label-radio" for="Work">Work</label>
                        <input type="radio" id="Others" value="Others" v-model="type">
                        <label class="label-radio" for="Others">Others</label>
                    </div>
                </div>
            </form>
            <router-link type="submit" class="checkout-btn" @click="handlesubmit()" to="/orderplace">CHECKOUT</router-link>
    
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
   created() {
        if (localStorage.getItem("reloaded")) {
                localStorage.removeItem("reloaded");
        } else {
            localStorage.setItem("reloaded", "1");
            location.reload();
        }
        service.userDisplayCart().then(response => {
            this.books = response.data;
        })
    },
    data() {
        return {
            flag: true,
            hide: true,
            booksCount: 0,
            name: '',
            phonenumber: '',
            pincode: '',
            locality: '',
            city: '',
            address: '',
            landmark: '',
            type: '',
            books: []
        }
    },
    methods: {
        flip() {
            this.hide = !this.hide;
        },
        Togglebtn() {
            this.flag = !this.flag;
        },
        handlesubmit() {
            let userData = {
                name: this.name,
                phonenumber: this.phonenumber,
                pincode: this.pincode,
                locality: this.locality,
                city: this.city,
                address: this.address,
                landmark: this.landmark,
                type: this.type,
            }
            service.customerRegister(userData).then(response => {
                return response;
            }).catch(error =>{
                alert("error in placed order");
                return error;
            })
        },
        // mounted(){
        //     service.mailSendSuccessfully().then(response=>{
        //         alert("order placed successfully");
        //          this.$router.push({path: '/orderplace'});
        //          return response;
        //     }).catch(error =>{
        //         alert("error in placed order");
        //         return error;
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Cart.scss";
</style>