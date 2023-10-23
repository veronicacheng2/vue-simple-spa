<template>
    <div v-if="page" class="container">
        <h1>{{page.pageTitle }}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default {
    created(){
        /* refers to the route currently being handled by this component */
        // this.$route.params
       
        this.page = this.$pages.getSinglePage(this.$route.params.index)

        // Method 1 : setting up watcher to watch params to reload data
        this.$watch(() => this.$route.params,(newParams,oldParams) => {
            // what we want to do with the new Params
            this.page = this.$pages.getSinglePage(newParams.index)
        })
    },
    data(){
        return {page:null}
    }
   
    
}

/*

 props:{
          // for props validation to avoid undefined error 
        page:{
            type:Object,
             // if this is string, we can just "SOME STRING" but since it is object, we need to use function 
            default(rawProps){
                return { 
                    pageTitle:'',
                    content:''
                }
            }
        }
    }


*/


// use data store that is reactive (changes in data will cause the application to update)

</script>