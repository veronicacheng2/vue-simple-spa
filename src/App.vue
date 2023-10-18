<template>
    <navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"/>
    
        <!--  v-show uses css to control (still in DOM) while v-if removes the whole html element  -->
    <div v-show="false">Hide this content!</div>
    
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]"/> -->

    <create-page :page-created="pageCreated"></create-page>

</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
    components:{Navbar,PageViewer,CreatePage},
    created(){
        this.getPages();
    },
    data(){
        return {
            activePage:0,
            pages:[
                {link:{text:'Home',url:'index.html'},pageTitle:'Home Page',content:'This is the home content'},
                {link:{text:'About',url:'about.html'},pageTitle:'About Page',content:'This is the about content'},
                {link:{text:'Contact',url:'contact.html'},pageTitle:'Contact Page',content:'This is the contact content'}
            ]
        }
    },methods:{
        async getPages(){
            /* simulate hitting some endpoints on server */
            let res = await fetch("pages.json");
            let data = await res.json();
            this.pages = data;
        },
        pageCreated(pageObj){
            console.log(pageObj)
            console.log("Page Created!!!!!")
        }
    }
}

</script>