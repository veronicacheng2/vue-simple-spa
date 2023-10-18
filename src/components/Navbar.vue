<template>
<nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar','navbar-expand-lg']">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(page,idx) in pages" class="nav-item" :key="idx">
            <navbar-link :page="page" :isActive="activePage===idx " @click.prevent="navLinkClick(idx)"/>
            </li>
        </ul>
        <form class="d-flex">
            <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle</button>
        </form>
    </div>
</nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
export default {
    components:{
        NavbarLink
    },
    created(){
        this.getThemeSetting()
    },
    props:['pages','activePage','navLinkClick'],
    data(){
        return {theme:'light'}
    }, 
    methods:{
        changeTheme(){
            if(this.theme==='light'){
                this.theme='dark';
            }else{
                this.theme='light';
            }
            this.storeThemeSetting();
        },
        storeThemeSetting(){
            localStorage.setItem("theme",this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem("theme");
            if(theme){
                this.theme = theme;
            }
        }

    }
   
}

</script>