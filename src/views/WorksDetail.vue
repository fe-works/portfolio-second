<template>
  <div id="article">
      <div id="fix" />

      <!-- Background-image (img_id-1 or id-2)-->
      <div id="grid">
      <section id="picture">
        <img class="capture capture-1" v-bind:src="require('@/assets/detail_article/img_' + description.id + '-1.png')" />
        <img v-if="description.type !== 'photo'" class="capture capture-2" v-bind:src="require('@/assets/detail_article/img_' + description.id + '-2.png')"/>
      </section>

      <section id="text">
        <div id="title">
        <span>No:{{ id }}</span>
        <h1>{{ description.title }}</h1>
        <h3>{{ description.subtitle }}</h3>
        <p>{{ description.text }}</p>
        </div>

        <div id="info-title_1">
        <h2 v-if="description.type === 'photo'">Date</h2>
        <h2 v-else>Client</h2>    
        <h3>{{ description.text2 }}</h3>
        </div>

        <div id="info-title_2">
        <h2 v-if="description.type === 'photo'">Camera / Lens</h2>
        <h2 v-else>Concept</h2>
        <h3>{{ description.text3 }}</h3>
        </div>

      </section>
    </div>
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

    created() {
      let d = this.getDescription(this.id)

      //なかったら
      if(d === undefined){
        this.$router.push('/')
      }

      this.description = Object.assign(d)
    }
}
</script>

<style scoped>
#fix{
  content:none;
  width:100vw;
  height:60px;
}

#grid{
  display:flex;
  justify-content:center;
  margin: 0 auto;
  margin-top:30px;
}

#picture{
  width:70vw;
  max-width:1000px;
  margin:0;

  align-items: flex-end;
}

#text{
  margin-right:20px;
  max-width:430px;
  top:0;
  align-items: flex-start;
  margin-left:40px;
  
  margin-bottom:50px;

  margin-top:-60px;
  padding-top:70px;
  
  align-self: flex-start;
  position: sticky;
}

#picture img{
    width:68vw;
    max-width:1000px;
    height:auto;
    margin:0,auto;
    margin-bottom:20px;
    margin-left:10px;
}

#grid p,h1,h2,h3{
    margin:0;
    padding:0;
}
#grid h1{
  font-size:30px;
  margin:0;
}

#title span{
  font-size:13px;
  font-weight:normal;
  margin:0;
}

#title h3{
  font-size:14px;
  font-weight:normal;
  margin-top:5px;
}

#title p{
  font-size:14px;
  margin:10px 0;
}

#info-title_1 h2,#info-title_1 h3,
#info-title_2 h2,#info-title_2 h3{
  font-weight: normal;
  margin:3px 0;
}

#info-title_1 h2, #info-title_2 h2{
  font-size: 20px;
}

#info-title_1 h3,#info-title_2 h3{
  font-size: 14px;
}

#info-title_1{
  margin: 20px 0;
}

@media screen and (max-width:750px) {
  #grid {
    width:100%;
    height: auto;
    margin: 0 auto;

    flex-direction:column;
    justify-content:center;
  }

  #text {
    display:block;
  }

  #picture img{
    width:90vw;
    height:auto;
    margin:0;
    margin-bottom:10px;

    
  }

  #picture {
    margin:0 auto;
    height:auto;
    width:auto;
    padding-top: 70px;
    display:flex;
    justify-content: center;
    flex-direction: column;
  }

}
</style>
