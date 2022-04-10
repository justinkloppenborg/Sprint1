<template>
  <div>
  <div class="List">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="text-center">Games</h3>
              <table class="table align-middle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="d-none d-sm-table-cell">Description</th>
                        <th>Console</th>
                        <th>Amount</th>
                        <th>Format</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="game in Games" :key="game.key">
                        <td>{{ game.name }}</td>
                        <td class="d-none d-sm-table-cell">{{ game.description }}</td>
                        <td>{{ game.console }}</td>
                        <td>${{ game.amount }}</td>
                        <td>{{ game.format }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: game.key }}" class="btn btn-primary btn-sm px-3">
                              Edit
                            </router-link>
                            <button @click.prevent="deleteGame(game.key)" class="btn btn-danger btn- sm px-3">
                              Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import db from '../firebaseDb'

export default {
  data () {
    return {
      Games: []
    }
  },
  created () {
    db.collection('games').onSnapshot((snapshotChange) => {
      this.games = []
      snapshotChange.forEach((doc) => {
        this.Games.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          console: doc.data().console,
          amount: doc.data().amount,
          format: doc.data().format
        })
      })
    })
  },
  methods: {
    deleteGame (id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('games').doc(id).delete().then(() => {
          console.log('Document deleted!')
        })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>

<style>
.table thead {
  background-color: #d71616;
  color: #000000;
}

.table td,.table th {
  padding: 12px 15px;
  border-bottom: 1px solid rgb(126, 126, 126);
  text-align:center;
}

.btn {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin: 2px;
}
</style>
