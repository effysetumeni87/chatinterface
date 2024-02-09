<template>
  <q-page class="flex   flex-center">

  <q-card dark flat  class="full-width bg-grey transparent">
    <q-card-section class="row justify-center">
        <div class="">
           <q-img height="50px" width="50px" src="chatbot.png"/>
        </div>

        <q-card-section style="size:34px;" class="col-12 text-weight-bold text-h6 text-grey text row justify-center">
          Log In
       </q-card-section>

    </q-card-section>

    <div class="row q-pa-sm">
      <q-input v-model="username" class="col-12" label="username" />
    </div>
    <div class="q-pa-sm">
      <q-input v-model="password" placeholder="Placeholder" class="col-12" label="password" />
    </div>
    <div class="row q-mt-md q-px-sm ">
    <q-space/>  <passwordReset/>
    </div>
    <div class="q-pa-sm ">
      <q-btn :loading="loading" @click="goToChatPage" class="full-width" color="blue" label="login"/>
    </div>
    <div class="q-px-sm ">
       <register/>
    </div>



    <q-card-section style="size:34px;" class=" text-weight-bold text-h6 text-grey text row justify-center">

   </q-card-section>


    </q-card>

</q-page>
</template>

<script>
 import passwordReset from 'src/components/loginComponents/passwordReset.vue';
 import register from 'src/components/loginComponents/register.vue';

import { defineComponent , ref , } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { Notify } from 'quasar';
export default defineComponent({
  name: 'PageLogin',
  components:{
    passwordReset,
    register
},
setup(){
    const router = useRouter()
    const route = useRoute()

  let loadingVal=ref(false)
  let username=ref('adamantcode')
  let password=ref('password123')

  //mimick login process
  const goToChatPage=()=>{
    loadingVal.value= true
    if (username.value=='adamantcode'&&password.value=='password123') {
     //wait 2 second to
      setTimeout(() => {
    console.log('chat route')
    router.push({ path: 'chat' })
    loadingVal.value= false
    // notify user when logged in
    Notify.create({
    message: 'Login Success',
    color:"green"
      })

   }, 2200);
    } else {
      Notify.create({
    message: 'Wrong email or password',
    color:"red"
      })
      loadingVal.value= false
    }

  }
  return{
   loading: loadingVal,
   goToChatPage,
   username ,
   password ,
  }
}
})
</script>

<style>

</style>
