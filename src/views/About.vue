<template>
  <div id="about">
    <div id="profile">
    <h1>Fe-chan</h1>
    <h2>Student, Photograph, Design, etc.</h2>

    <!-- SNS-acsess -->
    <div id="logo-sns">
        <a href="https://twitter.com/_fechan/"><img src="@/assets/logo_tw.svg"></a>
        <a href="https://instagram.com/_fechan/"><img src="@/assets/logo_insta.svg"></a>
    </div>

    <p id="intro">フォトグラファー、学生。千葉県生まれ。<br>
      学業では情報工学を専攻している。主は学業のほか、UI/Webデザインを独学で学ぶ。情報セキュリティ分野にも興味を持つ。<br>
      16歳で「ConpTIA Security+」を取得。これを皮切りに、現在は応用情報技術者(AP)などの取得を目指す。<br>
      その一方で、写真撮影を趣味で行う。街ブラが好き。よく散策に没頭していることも。<br>
      そのほかにも、趣味としてデザインや動画制作、DJなど多岐にわたり取り組んでいる。</p>
    </div>

    <div id="skills">
      <!-- ここもJsonベースにしたい -->
    </div>
  </div>
</template>

<style>
#about {
  display: flex;
  flex-wrap: wrap;
  width: 70vh;
  align-items: center;

}
#profile h1:before {
  background-color:#BF2427;
  content: "";  
  height:10px;
  width:2px;
  border-radius: 2px;
  padding-right: 20px; 
}

#profile h1 {
padding-left:20px;
}
</style>

