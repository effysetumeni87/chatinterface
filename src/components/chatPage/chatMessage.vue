<template>
  <div>
      <q-card class="bg-grey-1"  flat >


    <q-chat-message class="  text-subtitle2
      " v-for="chat in chats"
      :key="chat.stamp"
      :sent="chat.sent"

   >


      <template v-slot:name >
        <q-btn  no-caps class="q-my-xs" v-if="!chat.sent" flat rounded >
          <q-avatar size="25px">
            <img src="image126.png">
          </q-avatar>
          <span class="q-px-sm text-caption">
            chatbot
          </span>

          </q-btn>
          <q-btn no-caps label="me" flat color="blue" v-else    icon="account_circle" />


      </template>
      <div >

       <div v-if="!chat.sent" >
        <div v-if="!chat.sent && chat.img.length!==0" >
          <q-img fit height="250" :src="chat.img"/>

       </div>
        <div class="q-ma-sm text-white">
          {{ chat.text }}
        </div>

     </div>
        <div v-else >
             {{ chat.text }}
         </div>

      </div>


     </q-chat-message>


    </q-card>
  </div>
</template>

<script>
// import ManageSubModules from '../popUps/manageSubModules.vue'
import {defineComponent , ref, computed} from 'vue'
import {useStore} from 'vuex'

// import ReplyMessageTabPanel from './replyMessageTools/replyMessageTabPanel.vue'
// import SendMessage  from './userMessageTools/sentMessage.vue'
// import AiModulesTab from './replyMessageTools/aiModulesTab.vue'
export default defineComponent({
  setup() {
      const store = useStore();
      const chats = computed(() => store.state.chats.chats);
      return {
          chats
      };
  },
  components: {

  }
})
</script>
