<template>
<div class="main">
    <div class="container">
        <img src="../assets/picture.png" id="side-img" alt="notFound" />
        <p>Online Book Shopping</p>
        <div class="box">
            <div class="headings">
                <router-link to="/login">
                    <h5 class="signin" :class="{ active: isVisible }" @click="isVisible = true" id="sign-in">Login</h5>
                </router-link>
                <router-link to="/register">
                    <h5 class="signup" :class="{ active: !isVisible }" @click="isVisible = false" id="sign-up">signup</h5>
                </router-link>
            </div>
            <form ref="myForm" @submit.prevent="handleSubmit">
                <div class="username">
                    <p>EmailID</p>
                    <input type="email" class="emailbox" required v-model="email" id="email-id" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="password-section">
                    <p>Password</p>
                    <input :type="passwordType" class="password" id="pwd" v-model="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$">
                    <img src="../../src/assets/show-hide-icon-28.jpg" onclick="show();" id="eye" @click="togglePasswordButton()">
                </div>
                <div class="forgot-password">
                    <a href="http://localhost:8080/forgot-password">forgot password?</a>
                </div>
                <button class="btn-section" id="login-btn" type="submit">Login</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            passwordType: "password",
            isVisible: true
        }
    },
    methods: {
        togglePasswordButton() {
            this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
        },
        async handleSubmit() {
            let userData = {
                email: this.email,
                password: this.password
            }
            service.userLogin(userData).then(response => {
                if(response.status == 200){
                    alert("logged in..");
                    localStorage.setItem('token', response.data.token);
                    this.$router.push('/dashboard');
                    return response;
                }
            }).catch(error => {
                alert("error...!!! invalid input");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Login.scss";
</style>
