<template>
  <div class="contact">
    <div id="fix"></div>
      
      <div class="form">
      <img id="head-icon" src="@/assets/Line-1.svg">
      <h1 id="title">contact</h1>
      <p id="intro">お問い合わせは、下記フォームよりお願いします。</p>

      </div>
  </div>
</template>

<style scoped>
#fix {
  width:100vw;
  height:60px;
  content:none;
}

#form {
  margin:100px 0px;
  
  display:grid;
  /* 行 */
  grid-template-rows: 40px 40px auto;

  /* 列 */
  grid-template-columns: 100px 10px auto;
}

#head-icon {
  grid-row:1;
  grid-column: 2;
}

#title {
  grid-row:1;
  grid-column: 3;
}

#intro {
  grid-row:2;
  grid-column:3;
}
</style>