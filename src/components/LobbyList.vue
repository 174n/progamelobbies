<template>
  <div>
    <div v-for="globallobby in lobbies">
      <md-toolbar md-theme="default">
        <span class="md-title">{{ globallobby.name }} Lobbies</span>
      </md-toolbar>

      <md-list class="lobbies_list">
        <md-list-item v-for="lobby in globallobby.lobbies" :key="lobby.name">
          <md-icon>{{ lobby.icon }}</md-icon>
          <span>{{ lobby.name }}</span>

          <md-list-expand>
          <md-list>
              <md-list-item class="md-inset" v-for="item in reverse(lobby.lobbies)" :key="item.url">

                <div class="md-list-text-container">
                  <span><span v-for="(tag, i) in item.tags" :key="i">{{ lobby.tags[tag]+(i<(item.tags.length-1) ? ", " : "") }}</span></span>
                  <!-- <span><md-chip md-static v-for="(tag, i) in item.tags" :key="i">{{ lobby.tags[tag] }}</md-chip></span> -->
                  <span><timeago :since="item.time"></timeago></span>
                </div>

                <md-button class="md-list-action" :href="item.url">Join</md-button>
              </md-list-item>
          </md-list>
          </md-list-expand>
        </md-list-item>
      </md-list>
    </div>

  </div>
</template>

<script>
import lobbiesRef from '../firebase';
let data;
export default {
  data () {
    return {
      data: false
    }
  },
  firebase: {
      lobbies: lobbiesRef.limitToLast(25)
  },
  methods:{
    reverse: (obj) => {
      if(typeof obj === 'object')
        return Object.keys(obj).map(function(val) { return obj[val] }).reverse()
      else return [];
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/settings.scss";

.md-list-text-container{
  padding: 10px !important;
}
.lobbies_list{
  @media screen and (min-width: 1280px) {
    width: 50%;
    margin: 0 auto;
  }
}
</style>