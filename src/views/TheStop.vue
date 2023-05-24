<template>
  <div class="baudy">
     <h2>#{{ stopblurb.stopnumber }} {{ stopblurb.title }}</h2>   
     <div v-html="stopblurb.blurbhtml"></div>
  </div>
  <div class="nav-footer">
      <a v-bind:href="stopblurb.lastlink" class="nav-button nav-back"><span class="arrow left"></span>back</a>
      <a href=".." class="nav-button nav-home">main</a>
      <a v-bind:href="stopblurb.nextlink" class="nav-button nav-forward">next<span class="arrow right"></span></a>
  </div>
</template>
  
  <script>
  export default {
    name: "TheStop",
    inject: ["stopblurbs"],
    data() {
      return {
        stopblurb: {},
      };
    },
    created() {
      const stopnumber = this.$route.params.stopnumber;
      this.stopblurb = this.stopblurbs.find((stopblurb) => stopblurb.stopnumber == stopnumber);
    }
  };
  </script>
  