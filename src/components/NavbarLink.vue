<template>
<a :href="page.link.url" :class="{active:activePage==idx}" class="nav-link" aria-current="page" :title="`This link goes to the ${page.link.text} page`"
            @click.prevent="navLinkClick(idx)">{{ page.link.text }}</a>
</teamplate>

<script>
    export default {
        props:["page",'isActive']
    }
</script>