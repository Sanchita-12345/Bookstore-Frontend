<template>
<div class="main">
    <nav class="navbar-top">
        <div class="navbar-header">
            <img src="../assets/education.png" id="education-logo" alt="notfound" />
        </div>
        <div class="navbar-title">
            <p>Bookstore</p>
        </div>
        <div class="input-group">
            <i class="fas fa-search"></i>
            <div class="form-outline">
                <input type="search" class="form-control" placeholder='Search...' />
            </div>
        </div>
        <div class="navbar-right" id="right-bar">
            <div class="user">
                <a> <i class="far fa-user"></i></a>
                <p class="profile-content">Profile</p>
            </div>
            <div class="cart">
                <a><i class="fas fa-cart-plus" @click="shownComponent='Cart'"></i></a>
                <p class="cart-content">cart <span class="length" v-if="booksCount">{{booksCount}}</span></p>
            </div>
        </div>
    </nav>
    <div class="main-body">
        <div class="books-total">
        </div>
        <div class="sort-books">
            <select class="options" @change="applyOption">
                <option disabled value="">Sort by relevance</option>
                <option value="HighToLow">price:High to Low</option>
                <option value="LowToHigh">price:Low to High</option>
            </select>
        </div>
    </div>

    <div v-if="flam==false">
        <h2>Hello</h2>
    </div>
    <DisplayBooks v-show="flag==='noOrder' && shownComponent==='DisplayBooks'" @update-books-count="(n)=>booksCount=n" />
    <Cart v-show=" shownComponent==='Cart'" />
    <sortBooksLowtoHigh v-show="flag==='lowToHigh'" @update-books-count="(n)=>booksCount=n" />
    <sortBooksHightoLow v-show="flag==='highToLow'" @update-books-count="(n)=>booksCount=n" />
</div>
</template>

<script>
import DisplayBooks from './DisplayBooks.vue'
import sortBooksLowtoHigh from './sortBooksLowtoHigh.vue'
import sortBooksHightoLow from './sortBooksHightoLow.vue'
import Cart from './Cart.vue'
export default {
    components: {
        DisplayBooks,
        sortBooksLowtoHigh,
        sortBooksHightoLow,
        Cart
    },
    data() {
        return {
            shownComponent: 'DisplayBooks',
            booksCount: 0,
            flag: 'noOrder',
            brand: 'Bookstore',
            name: '',
            flam: true,
            visible: true,
        }
    },
    methods: {
        flip() {
            this.flam = !this.flam;
        },
        applyOption(evt) {
            if (evt.target.value === "HighToLow") {
                this.flag = 'highToLow';
            } else this.flag = 'lowToHigh';
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Dashboard.scss";
</style>
