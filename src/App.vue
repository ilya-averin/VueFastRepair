<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
              to="/"
            ) FastRepair
            .button-burger(
              @click="menuShow = !menuShow"
              :class="{ active: menuShow }"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper(
              :class="{ active: menuShow }"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                  @click="menuShow = false"
                )
                  router-link.navbar-link(
                    :to="`${link.url}`"
                  ) {{ link.title }}

    router-view
</template>

<script>
export default {
  data () {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Repair', url: '/repair'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ]
    }
  }
}
</script>


<style lang="stylus">
@import './assets/stylus/main.styl'

// .header-logo{
//   margin-left: 5rem;
// }

.navbar-list{
  // margin-right: 7rem;
}

span.line{
  background-color: #333;
}

.wrapper
  background-color #fafafa

.navbar-content{
  width: 100%;
}

img
  // width: 440px;
  // height: 250px;
  max-width 100%
  // margin-right: 2rem;
  text-align: center;


.navbar-item
    font-size: 0.9rem
    letter-spacing: 0.3px
    &:hover
      text-decoration: underline

.navbar-link
  &.router-link-exact-active
    color #085ff7
    // text-decoration: underline
</style>
