<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <h1 class="header"><a href="/" class="headerlink">Kristi&nbsp;Lake Nature&nbsp;Trail</a></h1>
  <RouterView />
  <div class='footer'>
        Web Brochure maintained by C.R. - volunteer, skiier, 
        hiker, biker and more of this lovely place.
    </div>
</template>


<script>
export default {
  name: "App",
  provide() {
    return {
      stopblurbs: [
      { 
stopnumber:  1 
,title: "My Roots Go Down!" 
,blurbhtml: "<p>Jack pine is the most common type of tree that you will encounter on this trail. Probe the ground with your fingers and feel the sandy soil beneath the shallow layer of duff. These soils are poorly developed and subject to water and wind erosion.The deep tap roots of these trees must reach down to capture nutrients, as well as to provide stability.</p> <p>Touch the\"tweezer-like\"twinned needles of the pine. Feel the thick bark that protects these trees from ground fires. Find a pine cone and notice the tough resin that holds the scales closed. Only heat - or a squirrel's teeth - will release the seeds within. In fact, <img src=\"img/illustration1.png\" class=\"illustration44\" style=\"float: right; padding: 2px;\"> it was a previous fire that gave birth to this forest.</p> <p>Glance up at the tangled nest of small branches - aptly named \"witches broom\" - a reaction caused by a tiny parasitic plant, dwarf mistletoe, which has infected these trees. Dwarf mistletoe catapults its sticky seeds as far as 20 meters onto the branches of adjacent trees. Infected trees weaken over time and may eventually die.</p> <p>As you continue to follow the trail, listen for the chatter of red squirrels and look for patches of dry ground cranberry and bearberry on the forest floor. A \"wall of spruce\" will signal your arrival at the next stop.</p>" 
,lastlink: "/" ,nextlink: "/stop2"
},
{ 
stopnumber:  2 
,title: "I Feel a change coming on!" 
,blurbhtml: "<p>Compare the forest behind you with that ahead. At your back, the jack pine ends and beyond lies a dark green horizon of black spruce.</p> <p> Note the more open stand of jack pine. In contrast, the spruce forest grows tightly together with branches intertwined. There is lush vegetation beneath the drooping spruce boughs compared with the almost bare ground under the pines. <img src=\"img/illustration2.png\" class=\"illustration44\" style=\"float: right; padding: 2px;\"></p> <p> Imagine yourself an understory plant. Where would you get more sun? Where would you find more shade? Where would it be drier? Wetter? The variety of spaces provide for a diversity of species.</p> <p> You are about to enter a \"conifer swamp\". Come and explore a world where staying wet is a way of life!</p>" 
,lastlink: "/stop1" ,nextlink: "/stop3"
},
{ 
stopnumber: 3  
,title: "LIVING ON A SPONGE" 
,blurbhtml: "<p>Touch the \"soaking math quote of organic soil that reaches deeper Then the height of the house. Over the time, the accumulation of partially decomposed vegetation in this former streambed has become <img src=\"img/illustration3.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> saturated peat. These black spruce trees, with their spreading \"pancake roots\" maintain a precarious stability in these spongy soils.</p> <p> Run your hand over the carpet of feather mosses. In spring, sun-colored marsh marigolds brighten this backdrop. Look for the tall white bog-orchid. Your field guide will help you to identify the other plants amidst horsetails, grasses and sedges.</p> <p> Leaving the boardwalk, you will again be encircled by the familiar pines. Listen carefully for a faint \"tapping\" of a foraging downy or hairy woodpecker.</p> <p> Your next stop will reveal this trail's namesake!</p>" 
,lastlink: "/stop2" ,nextlink: "/stop4"
},
{ 
stopnumber: 4  
,title: "WHAT'S IN A NAME" 
,blurbhtml: "<p>At the top of this rise, a new world opens before you. Kristi Lake is a complex of shallow open and marsh that sustains a variety of wetland wildlife and vegetation.</p> <p> The official name of this water body is actually Coubeaux Lake - after noted naturalist Eugene Coubeaux who hailed from Belgium and spent some time in central Saskatchewan towards the turn of the previous century.</p> <p> The Ducks Unlimited Canada signs located here will explain the importance of water and wetlands, like Kristi Lake. The next section of the trail parallels the northern shoreline of Kristi Lake. Take the time to look and listen for birds and other animals that call this \"forest oasis\" home.</p> <img src=\"/img/illustration4.png\" class=\"illustration100\" style=\"padding: 2px;\"> " 
,lastlink: "/stop3" ,nextlink: "/stop5"
},
{ 
stopnumber: 5 
,title: "THERE'S MORE TO WETLANDS THAN WATER" 
,blurbhtml: "<p>Early in spring, listen for the chorus of \"Frog courtship\". Later in the spring, watch as the next generation of Canada geese leaves the nest. Birdsongs fill the crisp morning air, clouds of adult <img src=\"/img/illustration5.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> caddisflies emerge from their aquatic nursery, a muskrat slices  through the water... there is always something new.</p> <p> The strip of land between your feet and the water's edge is the riparian area - a vital link between water and land. Riparian zones reduce erosion, funnel nutrients to aquatic ecosystems, and provide wildlife habitat and travel corridors. Can you see any animal tracks leading to and from the lake?</p> <p> Notice the arrangement of the vegetation surrounding the open water. Cattails and rushes occupy the wettest places; next to them willows and alders, and some tamarack. Then where it is drier, the trembling aspen and white spruce appear.</p> <p> At the next stop you will encounter one of nature's enigmas - an organism that is a relationship.</p>" 
,lastlink: "/stop4" ,nextlink: "/stop6"
},
{ 
stopnumber: 6 
,title: "LIVING ON AIR" 
,blurbhtml: "<p>Most of the grayish-green clumps of plant-like material that you see at your feet or the \"stringy stuff\" hanging from the tree trunks and branches lives on air.</p> <p> Lichens are complex relationships between fungi and algae. Algae produces carbohydrates through photosynthesis, while fungi provide protection and obtains moisture and nutrients from the air.</p> <p> These two species of <img src=\"img/illustration6.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> lichens are some of the over 500 species of lichens that occur in the boreal forest. Green reindeer lichen (Cladina mitis) and the Northern reindeer lichen (Cladina stellaris) form much of the ground cover.</p> <p> Gently touch some of the lichens at your feet. They may feel either brittle, if the weather has been dry, or springy, if there has been recent precipitation. Lichens act as sponges, taking up everything that comes their way, including air pollution. For this reason, lichens serve as indicators of air quality.</p> <p> As you continue your walk, take note of the variety of lichens that you encounter - on the ground, on trees and on logs.</p> <p> At your next stop you will find a kettle - but don't expect hot water for tea!</p>" 
,lastlink: "/stop5" ,nextlink: "/stop7"
},
{ 
stopnumber: 7 
,title: "KETTLES GALORE, BUT WHERE IS THE WATER" 
,blurbhtml: "<p>The hollow just in front of you is called a \"kettle\". Look around, and you will notice similar features in the area.</p> <p> Over 10,000 years ago, as the glaciers slowly melted, large chunks of ice broke off and gradually became covered by glacial till released from the melting ice. With warming temperatures, these giant ice cubes eventually melted and the material covering them sank - leaving depressions in the landscape - like the one you see before you.</p> <p> You won't find any water in this kettle.The soils that have developed here <img src=\"img/illustration7.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> are well-drained and support a forest community. However, the next time you take a drive in the countryside, observe the circular shape of many of our ponds and sloughs. Most of these originated as glacial kettles.</p> <p> Take a closer look and notice how the plant communities differ, depending on which side of the kettle they are growing on. Which slopes get more sun? Which get more shade?</p> <p> Just a short distance ahead is another stop - one that will challenge your ability to focus on small details.</p>" 
,lastlink: "/stop6" ,nextlink: "/stop8"
},
{ 
stopnumber: 8 
,title: "MICRO HABITAT" 
,blurbhtml: "<p>Take the 'One Step Challenge'. Staying on the trail, take one GIANT step forward and make a note of the distance between your left and right footsteps. Now, examine the surface on either side of the trail along this distance. See if you can count at least 10 different kinds of plants. You might have to get down on your knees and poke your nose through the greenery. Surprising how much variety you can uncover <img src=\"img/illustration8.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> in the space of a single footstep!</p> <p> You might even find a pale plant of medium height, covered with red or purplish spots.This is the spotted coralroot - an orchid species. This plant has no chlorophyll. It is saprophytic, which means it obtains its nutrients from dead organic matter through a cooperative - or symbiotic - relationship with a fungus.</p> <p> As you continue, look for the characteristic white trunk of the trembling aspen emerging in the distance. A mixedwood forest of poplars and spruce lies ahead.</p>" 
,lastlink: "/stop7" ,nextlink: "/stop9"
},
{ 
stopnumber: 9 
,title: "MIXING IT UP" 
,blurbhtml: "<p>You are now in a forest dominated by trembling aspen, with some balsam poplar and white spruce.</p><p> Why 'mixedwood'? The boreal forest is comprised of a mixture of hardwoods (trembling aspen, balsam poplar, white birch) and softwoods (black and white spruce, balsam fir, tamarack and jack pine). Which trees grow where is <img src=\"img/illustration9B.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> determined by differences in soil, moisture conditions, and the type and frequency of natural and human-caused disturbances (fire, logging, insect infestations, disease). The boreal forest is a mosaic of various-sized patches of forest differing in age and composition.</p><p> Poke your finger into the soil. You may notice soils here have less sand and more clay and the depth of the forest litter - dead material - is much greater than in the jack pine forest. Decomposing forest litter feeds a more lush understory of shrubs and herbaceous plants.</p><p> Compare the two poplar species. Can you see the deep dark <img src=\"img/illustration9.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> furrows along the trunk of the balsam poplar? The trembling aspen with the greenish-white, smooth trunk is located here as well. Can you see it? The trunk of the trembling aspen has a white powder that will rub off on your hand; it is believed by some to act as a sunscreen for the tree.</p><p></p><p> As you walk to your next stop, watch for signs of animal activity.</p>" 
,lastlink: "/stop8" ,nextlink: "/stop10"
},
{ 
stopnumber: 10 
,title: "WILDLIFE HAVEN" 
,blurbhtml: "<p>This part of the forest is home to many wildlife species like white-tailed deer, snowshoe hare, and red-backed vole.</p> <p> The dense shrubs provide food or browse for deer in the winter. Take a close look at the ends of twigs and see if you can find ONE that has <img src=\"img/illustration10.png\" class=\"illustration44\" style=\"float: right; margin-right: 18px; padding: 2px;\"> not been chewed on. Look for the reddish bark of the red-osier dogwood, their preferred browse.</p> <p> The boreal mixedwood forest is also one of the richest environments for breeding songbirds in North America. Over 250 bird species, most of them migrants, have been recorded in the boreal ecosystems. It is the abundance of protein-rich 'bugs' which makes this forest so attractive for them.</p> <p> Your final stop is just ahead.</p>" 
,lastlink: "/stop9" ,nextlink: "/stop11"
},
{ 
stopnumber: 11 
,title: "LOOKING BACK - LOOKING AHEAD" 
,blurbhtml: "<p>The familiar pines once more surround you.  You have just explored four unique ecosystems. Can you remember and name them?</p><p> Nature reminds us that we too are part of the cycle of life. Consider the Impacts of our day-to-day lives on the natural systems that sustain us. Perched on the brink of global climate change, the kind of future for us,and for all life on this planet, is uncertain. Make one personal commitment today to lessen your impact on our natural environment.</p><p> The Saskatchewan Forestry Association hopes that you have enjoyed your walk on this nature trail. We invite you to return In a different season with a group, by yourself or with someone special.</p><p> If you have any comments or concerns regarding this trail, please contact the Saskatchewan Forestry Association. Consider joining our organization and becoming involved in our educational and conservation activities." 
,lastlink: "/stop10" ,nextlink: "/"
},
      ],
    };
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
