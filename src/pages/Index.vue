<template>
  <q-page class="flex row flex-center">
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3
     col-xl-3 full-height window-height
     bg-blue-grey-1">


                    <div>
                    <loginForm/>
                    </div>

        </div>
      <div v-if="this.$q.platform.is.desktop" class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 full-heig full-height    bg-blue-grey-1">
         <q-img transparent src='background1.png' class="row window-height">


         </q-img>
        </div>
  </q-page>
</template>

<script>
import loginForm from 'src/components/loginComponents/loginForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components:{
   loginForm
},
setup(){

  return{

  }
}
})
</script>
