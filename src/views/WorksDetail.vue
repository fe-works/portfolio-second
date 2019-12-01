<template>
  <div id="article">
      <div id="fix"></div>

      <!-- Background-image (img_id-1 or id-2)-->
      <section id="picture">
        <div class="capture capture-1" />
        <div class="capture capture-2" />
      </section>

      <section id="description">
        <div id="title">
        <span>No:{{ id }}</span>
        <h1>{{ description.title }}</h1>
        <h3>{{ description.subtitle }}</h3>
        <p>{{ description.text }}</p>
        </div>

        <div id="info-title_1">
        <h2 v-if="description.type === 'photo'">Date</h2>
        <h2 v-else>Client</h2>    
        </div>

        <h3>{{ description.text2 }}</h3>

        <div id="info-title_2">
        <h2 v-if="description.type === 'photo'">Camera/lens</h2>
        <h2 v-else>Concept</h2>    
        </div>

        <h3>{{ description.text3 }}</h3>

      </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'works-detail',
    props: {
        id: String,
    },
    data(){
      return{
        description:{}
      }
    },

    computed:mapGetters(['getDescription']),

    mounted() {
      let d = this.getDescription(this.id)

      //ok
      console.log(d)

      this.description.title = d.title
      this.description.id = d.id
      this.description.subtitle = d.subtitle
      this.description.text = d.text
      this.description.text2 = d.text2
      this.description.text3 = d.text3
      this.description.type = d.type

      //ok
      console.log(this.description)

      if(!d){
        this.$router.push('/')
      }
    }
}
</script>

<style scoped>
/* おそらくグリッド？ */
#fix{
  content:none;
  width:100vw;
  height:60px;
}

</style>
