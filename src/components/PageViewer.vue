<template>
    <div class="container">
        <h1>{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default {
    props:{
        /* for props validation to avoid undefined error */
        page:{
            type:Object,
            /* if this is string, we can just "SOME STRING" but since it is object, we need to use function */
            default(rawProps){
                return { 
                    pageTitle:'',
                    content:''
                }
            }
        }
    }
    
}

</script>