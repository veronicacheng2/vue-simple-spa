<template>
    <div class="container">
        <h1>Page Title</h1>
        <p>{{$route.params.index}}</p>
    </div>
</template>

<script>
export default {
    created(){
        /* refers to the route currently being handled by this component */
        this.$route.params
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

</script>