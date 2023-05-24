<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import StopList from '../components/StopList.vue'
</script>

<template>

<div style="text-align:center; vertical-align: top;">

<a style="text-decoration: none!important;">
        <span style="display: inline-flex; align-items: flex-start; padding: 5px;">
            <img src="@/assets/MainGraphic.png" class="main-graphic">                                
        </span>        
    </a>		
    <StopList/>
    <a href="KristiLakeNatureTrailBrochure.pdf" target="_blank" style="text-decoration: none!important;">
        <span style="display: inline-flex; align-items: flex-start; padding: 5px;">
            <img src="@/assets/MainGraphic.png" class="main-graphic">
        </span>
    </a>

</div>
<div class='footer'>
    Web Brochure maintained by C.R. - volunteer, skiier, 
    hiker, biker and more of this lovely place.
</div>
</template>
