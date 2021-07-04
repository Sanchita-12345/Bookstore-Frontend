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
                <a><i class="fas fa-cart-plus"></i></a>
                <p class="cart-content">Cart</p>
            </div>
        </div>
    </nav>
    <div class="main-body">
        <div class="books-total">
            <h3>Books<span class="items">(128items)</span></h3>
        </div>
        <div class="sort-books">
            <select class="options">
                <option value="volvo">sort by relevance</option>
            </select>
        </div>
    </div>
    <DisplayBooks />
</div>
</template>

<script>
import DisplayBooks from './DisplayBooks.vue'
export default {
    components: {
        DisplayBooks
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
@import "@/Styles/Dashboard.scss";
</style>
