<template>
  <div id="about">
    <div id="fix"></div>
    <div id="profile">

      <img id="my-icon" src="@/assets/Logo.svg" alt="my-icon">
      <img id="head-icon" src="@/assets/Line-1.svg" alt="">
      
      <div id="name">
        <h1>Fe-chan</h1>
        <h2>Student, Photograph, Design, etc.</h2>
      <!-- SNS-acsess -->
        <div id="logo-sns">
          <a class="twitter" href="https://twitter.com/_fechan/" target="_blank" rel=”noopener”><img src="@/assets/logo_sns/logo_tw.svg" alt="twitter-logo"></a>
          <a class="insta" href="https://instagram.com/_fechan/" target="_blank" rel=”noopener”><img src="@/assets/logo_sns/logo_insta.svg" alt="instagram-logo"></a>
        </div>
      </div>

      <p id="intro">フォトグラファー、学生。千葉県生まれ。<br />
        学業では情報工学を専攻している。情報セキュリティ分野にも興味を持っており、16歳で「ConpTIA Security+」を取得。これを皮切りに、現在は応用情報技術者(AP)などの取得を目指す。<br />
        その他、UI/Webデザインを独学で学び、コンテンツのデザインも手掛ける。写真撮影は趣味で、街ブラが好き。最近では、依頼され撮影を行うことも。<br />
        積極的に活動を仕掛けており、しばしばプロダクト開発やイベント開催などを主宰する。そのほか趣味として、動画制作やDJなど、多岐にわたり活動中。</p>
    
      <!-- ここもJsonベースにしたい -->
      <img id="head-icons" src="@/assets/Line-2.svg" alt="">
      <h1 id="skills-title">Skills</h1>

      <p class="box_title box_title-1">Programming</p>
      <p class="box_title box_title-2">Tools</p>
      <p class="box_title box_title-3">Other</p>

      <p class="box_items box_items-1">C, CSS, HTML, JavaScript, Vue.js</p>
      <p class="box_items box_items-2">AdobeXD, Illustrator, Lightroom, AfterEffects, Aviutl, VScode, Keynote, Rekordbox</p>
      <p class="box_items box_items-3">Photo, Design, Planning, Movie_Edit, DJ</p>

      <!-- 
        <div id="table">
        <table>
          <tr>
            <th class="skills-category">Programming</th>
            <td class="skills-detail">C, CSS, HTML, JavaScript, Vue.js</td>
          </tr>
          <tr>
            <th class="skills-category">Tools</th>
            <td class="skills-detail">AdobeXD, Illustrator, Lightroom, AfterEffects, Aviutl, VScode, Keynote, Rekordbox</td>
          </tr>
          <tr>
            <th class="skills-category">Other</th>
            <td class="skills-detail">Photo, Design, Planning, Movie_Edit, DJ</td>
          </tr>
        </table>
        </div>
        -->

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
  min-height:99.5vh;
}

#profile {
  margin:50px 0;
  display:grid;
  grid-template-rows:100px auto 40px auto auto auto;
  grid-template-columns:50px 150px 20px auto;
  margin-right:20px;
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
  margin-top:5px;
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
  margin-top:5px;
}


#skills-title {
  grid-row:3;
  grid-column:4;
  margin-top:3px;
}

.box_title {
  text-align:end;
}

.box_title.box_title-1 {
  grid-row:4;
  grid-column:2;
}

.box_title.box_title-2 {
  grid-row:5;
  grid-column:2;
}

.box_title.box_title-3 {
  grid-row:6;
  grid-column:2;
}

.box_items {
  color: #BF2427;
}

.box_items.box_items-1 {
  grid-row:4;
  grid-column:4;
}

.box_items.box_items-2 {
  grid-row:5;
  grid-column:4;
}

.box_items.box_items-3 {
  grid-row:6;
  grid-column:4;
}


@media screen and (max-width:750px) {

  #profile {
    margin:50px 0;
    display:grid;
    grid-template-rows:150px auto 40px auto auto auto;
    grid-template-columns:30px 100px 10px auto;
    margin-right:20px;
  }

  #my-icon img{
    width:100px;
    height:auto;
    margin-left:0;
    margin-right:0;
  }

  #my-icon{
    width:110px;
    margin-left:-10px;
    margin-top:-12px;
  }

  #name h1 {
  font-size:26pt;
  margin-top:-1px;
  margin-left:5px;
}

  #name h2 {
    font-size:14pt;
  }

  #logo-sns {
    margin-top:20px;
    margin-bottom:10px;
  }

  #logo-sns img{
    height:25px;
    width:auto;
    margin-right:5px;
  }

  #intro p{
    font-size:13pt;
    margin-left:-20px;
  }
  #table-name {
    grid-column:1/3;
    margin-right:6px;
  }
}

@media screen and (max-width:750px) {
  #fix{
    height:70px;
  }
}
</style>

