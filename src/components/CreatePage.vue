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
<script>
export default {
    props:['pageCreated'],
    data(){
        return {
            pageTitle:"",
            content:""
        }
    }
}
</script>