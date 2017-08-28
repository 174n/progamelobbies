<template>
  <div>

    <newlobby></newlobby>
    <lobbylist></lobbylist>
  
  </div>
</template>

<script>
import LobbyList from './components/LobbyList.vue';
import NewLobby from './components/NewLobby.vue';
// import Component from './components/Component.vue';
// import { EventBus } from './event-bus.js';

export default {
  components:{
    'lobbylist': LobbyList,
    'newlobby': NewLobby
    // 'component': Component
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
