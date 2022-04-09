<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Game</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="game.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="game.description" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="game.console" required>
                </div>.

                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="game.amount" required>
                </div>

              <div class="form-group">
                    <label>Payment Frequency</label>
                    <select id='frequency' class="form-control" v-model="game.frequency">
                      <option value='physical'>Physical</option>
                      <option value='digital'>Digital</option>
                    </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update Game</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import db from '../firebaseDb'

export default {
  name: 'Edit',
  data () {
    return {
      game: {
      }
    }
  },
  created () {
    let dbRef = db.collection('game').doc(this.$route.params.id)
    dbRef.get().then((doc) => {
      this.game = doc.data()
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onUpdateForm (event) {
      event.preventDefault()
      db.collection('games').doc(this.$route.params.id)
        .update(this.game).then(() => {
          console.log('Game successfully updated!')
          this.$router.push('/')
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
