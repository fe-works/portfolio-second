<template>
    <div id="TopArticle" v-on:click="onclick">
        <!-- 画像要素指定できるように -->
        <div class="capture" v-lazy:background-image="require('@/assets/top_article/' + article.img)">
        </div>
        <div class="text">
        <h2>{{ article.title }}</h2>
        <h3>{{ article.subtitle }}</h3>
        </div>
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
        // 本当はタイトルとかもpropsで渡したい
        onclick() {
            this.$router.push('/works/' + this.article.id )
        }
    }

}
</script>

<style scoped>
#TopArticle{
    background-color: #FFFFFF;
    width:750px;
    margin:0;
    margin-top:25px;
    padding:0;
}
#TopArticle .capture{
    width:750px;
    height:270px;
    margin:0;
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}
.text{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    margin: 10px 0;
}

#TopArticle .text h2{
    margin:0;
    font-size:24pt;
    font-weight: normal;
}

#TopArticle .text h3{
    margin:0;
    font-size:12pt;
    font-weight: normal;
}
</style>


