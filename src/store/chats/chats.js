const chats= {
  namespaced: true,
  state: {

      role:'users just testig ',
      chats:[

        {
        name:"",
        text:'Welcome, how can i help you today ?...'
        ,
        size:"6",
        img:"",
        stamp:"4 minutes ago",
        textcolor:"white",
        bgcolor:"primary",
        sent:false,
        }
      ],
  },
  actions: {

  },
  mutations: {
    SET_MODULE_OPTIONS(state,payload){
        state.activeModule=payload
    },
    setExampleChat(state ,payload){
      let imgMsg = {
        name:"",
        text: payload,
        size:"6",
        img:"portfolio2.png",
        stamp:"4 minutes ago",
        textcolor:"white",
        bgcolor:"blue-grey-2",
        sent:false,
        }

        let lorem = {
          name:"",
          text: "lorem ipsum from bot loremjh lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
          size:"6",
          img:"",
          stamp:"4 minutes ago",
          textcolor:"white",
          bgcolor:"blue-grey-2",
          sent:false,
          }
          state.chats.push(imgMsg)
          state.chats.push(lorem)
    },
    setChats(state ,payload){
        console.log(payload)
    //  state.chats.push(payload)
    let humanMsg = {
      name:"",
      text: payload,
      size:"6",
      img:"",
      stamp:"4 minutes ago",
      textcolor:"white",
      bgcolor:"blue-grey-2",
      sent:true,
      }

      let botMsg = {
        name:"",
        text: "lorem ipsum from bot",
        size:"6",
        img:"portfolio.jpg",
        stamp:"4 minutes ago",
        textcolor:"white",
        bgcolor:"blue-grey-2",
        sent:false,
        }
        state.chats.push(humanMsg)
        state.chats.push(botMsg)
        // setTimeout(()=>{
        //   state.chats.push(botMsg)
        // },500)
    }
},
getters: {
    getChats(state){
        return state.chats
    }
}

}

export default chats
