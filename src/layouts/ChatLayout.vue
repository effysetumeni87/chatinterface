<template>
  <q-layout view="hHh Lpr lFf">
      <q-header reveal class="bg-blue-grey-10">
      <div class="row no-wrap ">
        <div class=" col-6 fixed-left" v-if="this.$q.platform.is.mobile" >

          <!-- <SideOptions/> -->
       left

      </div>

      <q-toolbar  class="shadow-3 col-12 bg-white ">
         <div class="full-width row text-h6  text-weight-bolder
          ">

           <q-btn
         v-if="this.$q.platform.is.mobile"
         class="self-justify-left"
         color="black"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />


          <img class="self-justify-left" src="chatbot.png"  style="height:40px; width:40px"/>
          <q-space/>
          <q-btn to="/" size="sm" label="logout" style="background-color:#6d31ed;"/>
         </div>
      </q-toolbar>



      </div>
    </q-header>


    <q-drawer
       class="z-top q-pa-md bg-grey-1"
      v-model="leftDrawerOpen"
      show-if-above
      bordered


    >
      <q-list>

       <q-expansion-item

       expand-separator
       label="Coversations"
       default-opened
       expand-icon="add"
       header-class="bg-blue text-white"
       class="q-pa-sm"

       >


        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!-- #15ABFF -->
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Conversation 1',
     background:'#DEE1E6',
    icon: 'delete',
    classes:'q-my-xs , text-black',
    detail:'home',
    link: '/'
  },
  {
    title: 'Conversation 2',
     background:'#DEE1E6',
     classes:'q-my-xs , text-black',
    icon: 'delete',
    detail:'portfolio',
    link: ''
  },
  {
    title: 'Conversation 3',
     background:'#6d31ed',
     classes:'q-my-xs , text-white',
    icon: 'delete',
    detail:'Contact',
    link: ''
  },

];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
