<template>
  <div id="app" class="page">
    <div class="container content">
      <app-header></app-header>
      <transition name="rotate" mode="out-in">
        <router-view></router-view>
      </transition>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.page {
  background-color: #ccc;
  min-height: 100vh;
}

.content {
  background-color: #fff;
  min-height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.rotate-enter {
  transform: rotateX(90deg);
}

.rotate-leave {
  transform: rotateX(-90deg);
}

.rotate-enter-active, .rotate-leave-active {
  transition: transform 0.5s ease;
}

</style>
