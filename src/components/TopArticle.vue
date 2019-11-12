<template>
    <div id="TopArticle" v-on:click="onclick">
        <!-- 画像要素指定できるように -->
        <img class="capture" v-bind:src="article.img" />
        <h2>{{ article.title }}</h2>
        <h3>{{ article.subtitle }}</h3>
    </div>
</template>

<script>
//import{ mapActions } from 'vuex'
//import { UPDATE_CURRENT } from '@/mutation-types'

export default {
    name:'top-article',
    props: {
        article: { type:Object }
    },

    methods: {
        //...mapActions([UPDATE_CURRENT]),

        onclick() {
            //look-book
           // this[UPDATE_CURRENT](this.article)
            this.$router.push('/detail')
        }
    }

}
</script>

<style>

</style>


