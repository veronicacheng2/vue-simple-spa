<template>
   <form action="" class="container mb-3">
    <div class="row">
     <div class="col-md-8">
        <div class="mb-3">
            <label for="" class="form-label">Page Title</label>
            <input type="text" class="form-control" v-model="pageTitle"/>
        </div>
        <div class="mb-3">
                <label for="" class="form-label">Content</label>
                <textarea type="text" class="form-control" rows="5" v-model="content"/>
        </div>
     </div>
     <div class="col">
        <div class="mb-3">
            <label for="" class="form-label">Link Text</label>
            <input type="text" class="form-control" v-model="linkText">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Link URL</label>
            <input type="text" class="form-control" v-model="linkUrl"/>
        </div>
        <div class="row mb-3">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="published"/>
                <label for="gridCheck1" class="form-check-label">Published</label>
            </div>
        </div>
     </div>
    </div>
    <div class="mb-3">
        <button class="btn btn-primary" @click.prevent="submitForm" :disabled="isFormInvalid">Create Page</button>
    </div>
   </form>
</template>
<script>
export default {
    emits:{
        // extra validation
        pageCreated({pageTitle,content,link}){
            if(!pageTitle){
                return false;
            }

            if(!content){
                return false
            }

            if(!link || !link.text || !link.url){
                return false
            }
            return true;
        }
    },
    computed:{
        isFormInvalid(){
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
        }
    },
    data(){
        return {
            pageTitle:"",
            content:"",
            linkText:"",
            linkUrl:"",
            published:true
        }
    },
    methods:{
        submitForm(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                alert("Please fill the form");
                return;
            }


            
            /* $ means public */
            this.$emit('pageCreated',{
                pageTitle: this.pageTitle,
                content: this.content,
                link:{
                    text:this.linkText,
                    url:this.linkUrl
                },
                published:this.published
            })

            /* Component emitted event does not bubble!!!!!! (the event can only be listened by the direct parent of the component)*/

            /*  OLD (using props to pass event)
            this.pageCreated({
                pageTitle: this.pageTitle,
                content: this.content,
                link:{
                    text:this.linkText,
                    url:this.linkUrl
                },
                published:this.published
            });
            */

            // ctrl + alt to select multiple lines
            this.pageTitle="";
            this.content="";
            this.linkText="";
            this.linkUrl="";
            this.published=true;
          
        },
    },
    // side effects 
    watch:{

        // to monitor Page Title and Link Text
        pageTitle(newTitle,oldTitle){

            // user hasn't changed the linkText
            if(this.linkText === oldTitle){
                this.linkText = newTitle;
            }
        }
    }
}


/*
<template>
    
    
 <div class="container mb-3">
        <form>
            <div class="mb-3">
                <label for="" class="form-label">Page Title</label>
                <!-- TWO Way Binding using :value & @input <input type="text" class="form-control" :value="pageTitle" @input="(e) => pageTitle = e.target.value"/> -->
            <!-- Easier way to do TWO Way binding - v-model -->
                <input type="text" class="form-control" v-model="pageTitle"/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Content</label>
                <textarea type="text" class="form-control" rows="5" v-model="content"/>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" @click.prevent="pageCreated({pageTitle,content})">Create Page</button>
            </div>
        </form>
    </div>    
    
    
    
    
</template>




*/


/*

Computed Properties: simply return a value, use the existing data in order to compute a value that can be used in template (*no change* to the state, compute value based on current data)
Watcher: watches a property to change and provides the ability to *make changes* to the state



*/


</script>

