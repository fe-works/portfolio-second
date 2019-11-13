<template>
  <div id="about">
    <div id="fix"></div>
    <div id="profile">

      <img id="my-icon" src="@/assets/Logo.svg">
      <img id="head-icon" src="@/assets/Line-1.svg">
      
      <div id="name">
        <h1>Fe-chan</h1>
        <h2>Student, Photograph, Design, etc.</h2>
      <!-- SNS-acsess -->
        <div id="logo-sns">
          <a class="twitter" href="https://twitter.com/_fechan/"><img src="@/assets/logo_tw.svg"></a>
          <a class="insta" href="https://instagram.com/_fechan/"><img src="@/assets/logo_insta.svg"></a>
        </div>
      </div>

      <p id="intro">フォトグラファー、学生。千葉県生まれ。<br>
      学業では情報工学を専攻している。主は学業のほか、UI/Webデザインを独学で学ぶ。情報セキュリティ分野にも興味を持つ。<br>
      16歳で「CompTIA Security+」を取得。これを皮切りに、現在は応用情報技術者(FE)などの取得を目指す。<br>
      その一方で、写真撮影を趣味で行う。街ブラが好き。よく散策に没頭していることも。<br>
      そのほかにも、趣味としてデザインや動画制作、DJなど多岐にわたり取り組んでいる。</p>
    
      <!-- ここもJsonベースにしたい -->
      <img id="head-icons" src="@/assets/Line-2.svg">
      <h1 id="skills-title">Skills</h1>

      <section id="table-name">
        <p>programming</p>
        <p>Tools</p>
        <p>Other</p>
      </section>

      <!-- Jsonベースに変えよう -->
      <section id="table-contents">
        <p>CSS, HTML, JavaScript, C, Vue.js</p>
        <p>AdobeXD, Illustrator, Lightroom, AfterEffects, Aviutl, VScoode, Keynote, Rekordbox</p>
        <p>Photo, Design, Planning, Movie_Edit, DJ</p>
      </section>

    </div>
  </div>
</template>

<style scoped>
/* 見切れ防止 */
#fix {
  width:100vw;
  height:60px;
  content:none;
}
#about {
  font-family: 'century-gothic',a-otf-ud-shin-go-pr6n, sans-serif;
}
#profile {
  margin:50px 0;
  display:grid;
  grid-template-rows:100px 250px 40px 200px;
  grid-template-columns:100px 185px 20px auto;

}

#my-icon {
  grid-row:1;
  grid-column:2;
  width:150px;
  height:auto;
  margin-top:-30px;
  text-align: end;
}

#profile #head-icon {
  grid-row:1;
  grid-column:3;
  margin-top:3px;
}

#name {
  grid-row:1;
  grid-column:4;
}

#name h1 {
  margin:0;
}

#name h2 {
  margin: 5px 0;
  font-weight: normal;
  font-size:12pt;
}

#logo-sns{
  margin: 10px 0;
  display:flex;
  align-items: center;
  flex-wrap:nowrap;
}

#logo-sns a {
  display:block;
}

#logo-sns img{
  height:20px;
  width:auto;
}

#logo-sns .twitter{
  margin-right:10px;
}

#intro {
  grid-row:2;
  grid-column: 4;
}

#head-icons {
  grid-row:3;
  grid-column:3;
  margin-top:3px;
}


#skills-title {
  grid-row:3;
  grid-column:4;
  margin-top:3px;
}

#table-name {
  grid-row:4;
  grid-column:2;
  text-align: end;
}

#table-contents {
  grid-row:4;
  grid-column:4;
  color: #BF2427;
}


/* #skills{
  margin:50px 20px;
  display:grid;
  grid-template-rows:100px 250px;
  grid-template-columns: 185px 20px auto;
} */

</style>

