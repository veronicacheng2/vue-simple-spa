<template>
    <li>
        <a :href="page.link.url" :class="activeClasses" class="nav-link" aria-current="page" 
        :title="`This link goes to the ${page.link.text} page`"
        @click.prevent="$bus.$emit('navbarLinkActivated',idx)"
                    >{{ page.link.text }}</a>
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