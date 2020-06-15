<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('./assets/styles/brandProfile.css');

html, body {
  margin: 0;
  padding: 0;

  font-family: 'Raleway', sans-serif;
}

#app{
    background: linear-gradient(170deg, #1b1b2f, #1f4068);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 7s ease infinite;
    -moz-animation: AnimationName 7s ease infinite;
    animation: AnimationName 7s ease infinite;

    min-height: 100vh;
}

@-webkit-keyframes AnimationName {
    0%{background-position:17% 0%}
    50%{background-position:84% 100%}
    100%{background-position:17% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:17% 0%}
    50%{background-position:84% 100%}
    100%{background-position:17% 0%}
}
@keyframes AnimationName {
    0%{background-position:17% 0%}
    50%{background-position:84% 100%}
    100%{background-position:17% 0%}
}
</style>
