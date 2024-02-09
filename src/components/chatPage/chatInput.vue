<template>
  <div>
    <div class="row  text-center
    justify-center items-right  ">
    <!-- <div class="col-2"></div> -->

     <div :class="($q.platform.is.desktop)?
     ' col-11 q-mb-md  '
     :'col-12 q-mb-md '" style="z-index:9999;">
       <!-- <ChatForm   /> -->
       <div class="row justify-center">
      <q-btn no-caps :loading="loadingBtn" color="blue-9" @click="exampleMsg"
        rounded class=" col-xs-5 col-md-2 col-sm-4 col-lg-2 col-xl-2 q-ma-sm" size="sm"
        label="Option A"/>

      <q-btn no-caps outline rounded
      class="col-xs-5 col-md-2 col-sm-4 col-lg-2 col-xl-2 q-ma-sm" size="sm"
       label="Option B"/>

      <q-btn no-caps outline rounded
      class="col-xs-5 col-md-2 col-sm-4 col-lg-2 col-xl-2 q-ma-sm" size="sm"
      label="Option C"/>

      <q-btn no-caps outline rounded
      class="col-xs-5 col-md-2 col-sm-4 col-lg-2 col-xl-2 q-ma-sm"
      size="sm" label="Option D"/>
    </div>
       <div class=" ">
        <q-form>
          <q-input
         autogrow autofocus  class="q-mt-sm q-px-md self-right"
        outlined rounded  @keypress.enter.prevent="sendChat"
        v-model="message" label="type your question"
         >
          <template v-slot:append>
            <q-btn :loading="loading" flat size="sm" icon="send"  @click="sendChat" class="cursor-pointer" />
          </template>

       </q-input>
       </q-form>
       </div>



     </div>


   </div>
  </div>
</template>

<script>
import {defineComponent , ref, computed} from 'vue'
import {useStore} from 'vuex'
import {Notify} from 'quasar'
export default defineComponent({
  name: 'PageLogin',
setup(){
  const store = useStore();

  let message=ref('')
  let loadingVal=ref(false)
  let loadingBtn=ref(false)

  //btn interaction
  const exampleMsg=()=>{
    loadingBtn.value=true
    setTimeout(() => {
     const msg= message.value
     store.commit("chats/setExampleChat", msg)
     loadingBtn.value= false
     message.value=''

   }, 1000);
  }
  //mimick chat process
  const sendChat=()=>{
    loadingVal.value= true
    if (message.value==='') {
      Notify.create({
    message: 'write something',
    color:"red"
      })
      loadingVal.value= false


    }
     else {
      setTimeout(() => {
     const msg= message.value
     store.commit("chats/setChats", msg)
     loadingVal.value= false
     message.value=''

   }, 1200);
  }

  }
  return{
   loading: loadingVal,
   loadingBtn,
   sendChat,
   exampleMsg,
   message
  }
}
})
</script>

<style>

</style>
