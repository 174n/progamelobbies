<template>
  <div>
    <md-button class="md-fab md-fab-bottom-right" id="new" @click="openDialog('newlobby')">
      <md-icon>add</md-icon>
    </md-button>

    <md-dialog md-open-from="#new" md-close-to="#new" ref="newlobby">
      <md-dialog-title>Create new lobby</md-dialog-title>

      <md-dialog-content>

        <form id="newlobby" name="newlobby">
          <md-input-container>
            <label>URL</label>
            <md-input v-model="url" required></md-input>
          </md-input-container>

          <md-input-container>
            <label for="game">Game</label>
            <md-select name="game" id="game" v-model="game" required>
              <md-option v-for="(lobby, i)  in lobbies" :value="i" :key="i">{{ lobby.name }}</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label for="category">Category</label>
            <md-select name="category" id="category" v-model="category" required>
              <md-option v-for="(lobby, i)  in lobbies[game].lobbies" :value="i" :key="i">{{ lobby.name }}</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label>Description</label>
            <md-input v-model="comment"></md-input>
          </md-input-container>
        </form>

      </md-dialog-content>



      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('newlobby')">Cancel</md-button>
        <md-button class="md-primary" @click.prevent="create" form="newlobby" type="submit">Create</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-snackbar md-position="bottom center" ref="success" md-duration="2000">
      <span>Successfully added</span>
    </md-snackbar>
    <md-snackbar md-position="bottom center" ref="error">
      <span>Whoops... There is an error</span>
      <md-button class="md-accent" @click="create();$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import lobbiesRef from '../firebase';

export default {
  data () {
    return {
      url: "",
      comment:"",
      game: 0,
      category: 0
    }
  },
  methods:{
    openDialog(ref){
      this.$refs[ref].open();
    },
    closeDialog(ref){
      this.$refs[ref].close();
    },
    create(){
      if(this.url !== "")
      lobbiesRef.child(this.game+"/lobbies/"+this.category+"/lobbies").push({
        "url": this.url,
        "comment": this.comment,
        "time": {".sv":"timestamp"}
      }).then(() => {
        this.$refs.success.open();
      },
      (err) => {
        console.log(err);
        this.$refs.error.open();
      });
      this.closeDialog('newlobby');
    }
  },
  firebase: {
    lobbies: lobbiesRef.limitToLast(25)
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/settings.scss";


</style>