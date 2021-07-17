<template>
<div class="box">
    <h3 id="reset-title">Reset Your Password</h3>
    <div class="inner-box">
        <form @submit.prevent="">
            <div class="username">
                <p>Password</p>
                <input type="password" class="reset-password" v-model="newPassword" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" required />
                <p>RePassword</p>
                <input type="password" class="reset-password" v-model="confirmPassword" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" required />
            </div>
            <button class="btn-section" id="reset-btn" type="submit" @click="handleSubmit();">confirm</button>
        </form>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default{
    name: 'Reset',
    data() {
        return {
            newPassword: '',
            confirmPassword: ''
        }
    },
    methods: {
        async handleSubmit(){
            let userData = {
                newPassword: this.newPassword,
                confirmPassword: this.confirmPassword
            }
            service.userResetPassword(userData).then(response =>{
                console.log(response);
                alert("password updated successfully");
                this.$router.push('/login');
            }).catch(error =>{
                alert("error...!!!");
                return error;
            })
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/Styles/Reset.scss";
</style>
