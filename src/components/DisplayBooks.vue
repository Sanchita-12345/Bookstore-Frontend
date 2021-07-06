<template>
<div class="bookdisplay-section">
    <div class="book" v-for="book in books" :key="book.id">
        <div class="image-section">
            <div class="image-container">
                <img v-bind:src="book.file" />
                <!-- {{book.file}} -->
            </div>
        </div>
        <div class="name-section">
            {{book.name}}
        </div>
        <div class="author-section">
            by {{book.author}}
        </div>
        <div class="price-section">
            Rs. {{book.price}}<label>(2000)</label>
            <button v-if="flag" type="submit" @click="handleSubmit();Togglebutton();">close</button>
        </div>
        <div class="rating">
            <p>4.5<i class="fas fa-star"></i></p>
        </div>
        <div class="quantity">
            <p>(20)</p>
        </div>
    </div>
</div>
</template>
<script>
import service from '../service/User'
export default{
    name: 'DisplayBooks',
    data(){
        return{
            flag: true,
            books: [{
                id: 1,
                file: 'display image',
                name: 'Dont make me Think',
                author : 'Joseph',
                price : '1500',
            },]
        }
    },
    methods:{
        Togglebutton(){
            this.flag = !this.flag;
        },
        async handleSubmit(){
            service.userDisplayBooks().then(response => {
                this.books.push(...response.data);
            })
        },
    }
}
</script>
<style lang="scss" scoped>
@import "@/Styles/DisplayBooks.scss";
</style>
