<template>
  <div class="app">
    <header>
        <nav class="navbar justify-content-between flex-nowrap flex-row">
          <div class="container">
            <h1><span>Collectathoners</span></h1>
              <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                  <router-link class="nav-link pr-3" to="/create">Add Game</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">View Games</router-link>
                </li>
              </ul>
          </div>
        </nav>
    </header>
  <main>
    <router-view class="modify"></router-view>
  </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', san-serif;

  &::selection {
    background: transparentize(#ff0000, 0.5);
  }
}

body {
  background-color: #414141;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  
  justify-content: center;
  padding: 10px 16px;
  background-color: #000000;
  box-shadow: 0px 0px 6px rgba(46, 46, 46, 0.1);

  h1 {
    color: rgb(95, 95, 95);
    font-size: 28px;

    span {
      color: #ff0000;
    }
  }
}

h3 {
  padding-top: 10px;
}

.modify {
  padding: 10px;
}

</style>
