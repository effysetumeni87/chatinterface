<template>
  <q-page class="  bg-grey-2 row full-height full-screen ">
    <q-card  flat class="col-12 bg-grey-2">
      <q-card-section>

        <q-card  bordered   flat style="
        height:75vh;
        " class="bg-grey-1 row  full-width ">
        <q-toolbar class="bg-blue">
         <q-btn flat round  >
          <q-avatar size="42px">
            <img src="image126.png">
          </q-avatar>


          </q-btn>
          <span class="text-white text-caption q-mx-xs">chatbot</span>
        </q-toolbar>
             <div class="q-pb-lg text-black  col-12">
               <q-card-section>
                 <q-scroll-area style="height:55vh">
                  <chatMessage/>
                 </q-scroll-area>
               </q-card-section>


               <!-- <home-chat/> -->
             </div>
        </q-card>
      </q-card-section>

      <q-card-actions class="row justify-center fixed-botton">




      </q-card-actions>

    </q-card>
    <chatInput class="absolute-bottom"/>
  </q-page>
</template>

<script>
import chatInput from 'src/components/chatPage/chatInput.vue';
import chatMessage from 'src/components/chatPage/chatMessage.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components:{
    chatInput ,chatMessage
},
setup(){

  return{

  }
}
})
</script>


<style>

</style>
