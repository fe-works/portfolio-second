<template>
  <div id="contact">
    <div id="fix"></div>
      
      <div id="form">
        <img id="head-icon" src="@/assets/Line-1.svg" alt="">
        <h1 id="title">contact</h1>
        <p id="intro">お問い合わせは、下記フォームよりお願いします。<br/>
          (お急ぎの場合は、TwitterのDMをご利用下さい。必ず返信のお約束をするものではありません。)
        </p>

        <div v-if=" scrollHeader === 'smart'" id="googleform">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDY_1o6GND20HBPzJgtzGkaZG0AsBHTvkqT4zlzttXr5JeFA/viewform?embedded=true" width="360" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>      
        </div>

        <div v-else id="googleform">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDY_1o6GND20HBPzJgtzGkaZG0AsBHTvkqT4zlzttXr5JeFA/viewform?embedded=true" width="680" height="900" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:'contact',

  computed:mapGetters(['scrollHeader'])

}
</script>
<style scoped>
#contact {
  min-height:99.5vh;
  overflow: hidden;
}

#fix {
  width:100vw;
  height:60px;
  content:none;
}

#form {
  margin-top:50px;
  margin-bottom:20px;
  
  display:grid;
  /* 行 */
  grid-template-rows: 40px 80px auto;

  /* 列 */
  grid-template-columns: 50px 10px auto;
}

#head-icon {
  grid-row:1;
  grid-column: 2;
  margin-top:7px;
}

#title {
  grid-row:1;
  grid-column: 3;
  margin:auto 0;
}

#intro {
  grid-row:2;
  grid-column:3;
  margin:auto 0;
}

#form #googleform{
  grid-row:3;
  grid-column:3;
  margin-left: -40px;
}

@media screen and (max-width:800px) {
  #form {
    /* 行 */
  grid-template-rows: 40px 150px 1100px;

  /* 列 */
  grid-template-columns: 30px 10px auto;

  margin-left:auto;
  margin-right:auto;
  }

  #form #intro{
  margin-right:40px;
  }

  #form #googleform{
  grid-row:3;
  grid-column:2/3;
  width: 90vw;
  margin:0 auto;
  }

  #googleform iframe{
    margin-left:-10px;
    width: 90vw;
    height: 1200px;
  }

  #fix{
    height:70px;
  }
}
</style>