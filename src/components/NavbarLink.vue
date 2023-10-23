<template>
    <li>
        <router-link
        :to="`/${idx}`"
         active-class="active emphasize" class="nav-link" aria-current="page" 
        :title="`This link goes to the ${page.link.text} page`"
                    >{{ page.link.text }}</router-link>
    </li>
</template>

<script>
    export default {
        props:["page",'isActive','idx'],
        computed:{
            activeClasses(){
                return {

                    active:this.isActive,
                    emphasize:this.isActive
                }
            }
        }
    }
</script>

<style scoped>
/* default style is global */
.emphasize {
    text-decoration: underline !important;
}
</style>