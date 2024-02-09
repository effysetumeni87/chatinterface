<template>
  <div class="q-pa-md q-gutter-sm">
     <q-btn no-caps flat size="sm"
     label="Reset Password"
     color="blue" @click="fixed = true" />

    <q-dialog persisten   v-model="fixed">
      <q-card style="min-width:350px;">
        <q-card-section class="row justify-center">
          <div class="">
             <q-img height="50px" width="50px" src="chatbot.png"/>
          </div>

          <div style="size:34px;" class="col-12 text-weight-bold text-h6 text-grey text row justify-center">
           Reset Password
         </div>

      </q-card-section>

        <q-separator />

        <div >


          <div class="q-px-sm q-py-xs">
            <q-input type="password" v-model="password"   class="col-12" label="Password " />
          </div>
          <div class="q-px-sm q-py-xs">
            <q-input type="password" v-model="passwordConfirm"  class="col-12" label="Password Confirm" />
          </div>

          <div class="q-px-sm q-py-xs ">
            <q-btn :loading="loading" @click="mimickReset"
             class="full-width" color="blue" label="Reset Password"/>
          </div>

         </div>

        <q-separator />

        <q-card-actions align="right">
           <q-space/>
          <q-btn flat round  icon="close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Notify } from 'quasar';
export default {
  setup () {
  let loadingVal=ref(false)
  let username=ref('name surname')
  let password=ref('password123')

  let passwordConfirm=ref('password123')
  let fixed = ref(false)

  const mimickReset=()=>{
    loadingVal.value= true
    setTimeout(() => {
    console.log('chat route')
    loadingVal.value= false
    // notify user on success
    Notify.create({
    message: 'Reset successfull ,You can now login with new password ',
    color:"green"
      })
      fixed.value=false
   }, 2200);

  }
    return {

      fixed ,
      loading: loadingVal,
      mimickReset,
      password,
      passwordConfirm


    }
  }
}
</script>
