<template>
  <div id="article">

    <!-- V-forを使った無限生成に(配列から取り出す) -->
    <div id="img_1" class="img" v-bind:style = "{'background-image': 'url('+ require('@/assets/sub_article/' + detail.img) + ')'}" >
    </div>

    <div v-if="detail.sub_img"
           id="img_2" class="img" v-bind:style =  "{'background-image': 'url('+ require('@/assets/sub_article/' + detail.sub_img) + ')'}" >
    </div>

    <!-- 名前 -->
    <h1>{{ detail.title }}</h1>

    <!-- 作業したこと -->
    <h3>{{ detail.works }}</h3>

    <!-- コメント -->
    <p> {{ detail.other}}</p>

    <h2>Client</h2>
    <p>{{ detail.client }}</p>

    <h2>Concept</h2>
    <p>{{ detail.consept }}</p>

  </div>
</template>

<script>
//import

export default {
    name: 'works-detail'
}
</script>

<style scoped>
/* おそらくグリッド？ */

</style>
