<template>
<div class="main">
    <div class="container">
        <img src="../assets/picture.png" id="side-img" alt="notFound" />
        <p>Online Book Shopping</p>
        <div class="box">
            <div class="headings">
                <h5 class="signin" id="sign-in">Login</h5>
                <h5 class="signup" id="sign-up">signup</h5>
            </div>
            <form @submit.prevent="handleSubmit">

                <div class="fullname">
                    <p>FullName</p>
                    <input type="text" class="namebox" required v-model="fullname" id="fullname" autocomplete="off" pattern="[A-Za-z\s]{3,15}">
                </div>
                <div class="username">
                    <p>EmailID</p>
                    <input type="email" class="emailbox" required v-model="email" id="email-id" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="pass">
                    <p>Password</p>
                    <input :type="passwordType" class="password" id="pwd" v-model="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$">
                    <img src="../../src/assets/show-hide-icon-28.jpg" onclick="show();" id="eye" @click="togglePasswordButton()">
                </div>

                <div class="mobile-number">
                    <p>MobileNumber</p>
                    <input type="tel" class="telephone" id="telephone-number" v-model="mobile" pattern="^\d{10}$" required>
                </div>
                <button class="btn-section" id="reg-btn" type="submit">Signup</button>
            </form>
        </div>
    </div>

</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Register',
    data() {
        return {
            fullname: '',
            email: '',
            password: '',
            phone: '',
            passwordType: "password",
        }
    },
    methods: {
        togglePasswordButton() {
            this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
        },

        async handleSubmit(){
            let userData = {
                fullname :this.fullname,
                email: this.email,
                password: this.password,
                mobile: this.mobile
            }
            service.userRegister(userData).then(response => {
                if (response.status == 201) {
                alert("user registered successfully");
            }
            return response;
            }).catch(error =>{
                alert("Error...!!!");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Register.scss";
</style>
