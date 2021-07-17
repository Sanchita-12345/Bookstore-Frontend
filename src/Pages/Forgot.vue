<template>
<div class="box">
    <h3 id="forgot-title">Forgot Your Password?</h3>
    <div class="inner-box">
        <form @submit.prevent="handleSubmit">
            <p>Enter your email adderess and we'll send you a link to reset your password.</p>
            <div class="username">
                <p>EmailID</p>
                <input type="email" class="emailbox" required v-model="email" id="email-id" autocomplete="off" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
            </div>
            <button class="btn-section" id="forgot-btn" type="submit">Reset Password</button>
        </form>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    name: 'Forgot',
    data() {
        return {
            email: ''
        }
    },
    methods: {

        async handleSubmit() {
            let userData = {
                email: this.email
            }
            service.userForgotPassword(userData).then(response => {
                if (response.status == 200) {
                    alert("mail is sended successfully")
                    this.$router.push('/resetPassword')
                    return response;
                }
            }).catch(error => {
                alert("given email id is not registered...!!!");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Forgot.scss";
</style>
