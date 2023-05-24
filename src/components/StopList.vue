<template>
    <div class="baudy">
    <h1><center>Enterpretive Stops</center></h1>
      <div  v-for="stopblurb in stopblurbs" :key="stopblurb.stopnumber">
        <p          :class="'Stop' + stopblurb.stopnumber + 'Color'" class="p-enterp-button">
        <RouterLink :class="'Stop' + stopblurb.stopnumber + 'Color'" class="ref-enterp-button" :to="'/Stop' + stopblurb.stopnumber">
            Stop {{ stopblurb.stopnumber }} - {{ stopblurb.title }}</RouterLink></p>       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "StopList",
    inject: ["stopblurbs"],
  };
  </script>
  