<template>
<nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar','navbar-expand-lg']">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <navbar-link :page="page" :idx="idx" :isActive="activePage===idx "  v-for="(page,idx) in publishedPages" 
            class="nav-item" :key="idx"/>          
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
    computed:{
        // return an array that only has the published pages
        publishedPages(){
            return this.pages.filter(page => page.published)
        }
    },
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