<template>
  <div>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Game</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="collectathoners.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="collectathoners.description" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="collectathoners.console" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="collectathoners.amount" required>
                </div>

                <div class="form-group">
                    <label>Payment Frequency</label>
                    <select id='frequency' class="form-control" v-model="collectathoners.digital" required>
                      <option value='physical'>Physical</option>
                      <option value='digital'>Digital</option>
                    </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block" @click="addgame">
                       Add Game
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
import db from '../firebaseDb'

export default {
  name: 'Create',
  data () {
    return {
      game: {},
    }
  },
  methods: {
    addGame() {
      if (this.game.name.length !== 0 && this.game.description.length !== 0) {
        db.collection('games').add(this.game).then(() => {
          alert('Game successfully created!');
          this.game.name = ''
          this.game.description = ''
          this.game.console = ''
          this.game.amount = ''
          this.game.frequency = ''
        })
        this.error = true;
        this.errorMsg = 'Please fill out the title and description'
        setTimeout(() => {
          this.error = false;
        }, 5000)
      }
    }
  }
}
</script>
