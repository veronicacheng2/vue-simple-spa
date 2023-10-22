<template>
    <navbar :pages="pages" :active-page="activePage"  />
    
        <!--  v-show uses css to control (still in DOM) while v-if removes the whole html element  -->
    <div v-show="false">Hide this content!</div>
    
    <router-view />
    
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]"/> -->

    <!-- pageCreated was originally passed as props :page-created, but we now use @page-created to represent a custom event (for readibility) -->
    <!-- <create-page @page-created="pageCreated" /> -->

</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
    components:{Navbar,PageViewer,CreatePage},
    created(){
        this.getPages();
        this.$bus.$on('navbarLinkActivated',(idx) => {this.activePage = idx})
    },
    
    data(){
        return {
            activePage:0,
            pages:[
            ],
            
        }
    },methods:{
        async getPages(){
            /* simulate hitting some endpoints on server */
            let res = await fetch("pages.json");
            let data = await res.json();
            this.pages = data;
        },
        pageCreated(pageObj){
            this.pages.push(pageObj);
        }
    }
}

</script>