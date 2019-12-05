<template>
    <div id="SubArticle" v-on:click="onclick">

        <!-- 画像要素指定できるように/詳細記事を表示する -->
        <div class="capture" v-bind:style="{'background-image': 'url('+ require('@/assets/' + subarticle.img) + ')'}">
        </div>
        <div class="text">
        <h2>{{ subarticle.title }}</h2>
        <h3>{{ subarticle.subtitle }}</h3>
        </div>
    </div>
</template>

<script>
//import{ mapActions } from 'vuex'
//import { UPDATE_CURRENT } from '@/mutation-types'

export default {
    name:'sub-article',
    props: {
        subarticle: { type:Object }
    },

     methods: {
        // 本当はタイトルとかもpropsで渡したい
        onclick() {
            this.$router.push('/works/' + this.subarticle.id )
        }
    }

}
</script>

<style scoped>
#SubArticle{
    background-color: #FFFFFF;
    width:350px;
    margin:20px 0;
    padding:0;
}

#SubArticle .capture{
    width:350px;
    height:200px;
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
    margin: 5px 0;
}

#SubArticle .text h2{
    margin:0;
    font-size:16pt;
    font-weight: normal;
}

#SubArticle .text h3{
    margin:0;
    font-size:8pt;
    font-weight: normal;
}


@media screen and (max-width:750px) {
    .capture {
        width:90%;
        height: auto;
        margin: 0 auto;
        justify-content: space-around;
    }
}

@media screen and (max-width:360px){
    #SubArticle{
        width:300px;
        margin:15px auto;
    }

    #SubArticle .capture{
        width:300px;
        height:162px;
        margin:0 auto;
    }
}
</style>


