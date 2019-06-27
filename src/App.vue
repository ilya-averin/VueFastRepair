<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
              to="/"
            ) FastRepairR
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
    //- footer_section
    footer
      .main-page
        h1 Answers to popular questions
        accordion(:items='collapsibleItems')
        .footer-wrapper
          .footer-contact
            .col
              h4 About
              ul
                li Fast Repair
                li +375 29 829 90 57
                li fast.repair@gmail.com
            .col
              h4 Introduction
              ul
                li Login
                li Registration
            .col
              h4 Links
              ul
                li Repair
                li Login
                li Registration
            .col.social
              h4 Connect
              ul
                li
                  img(src='https://svgshare.com/i/5fq.svg', width='32', style='width: 32px;')
                li
                  img(src='https://svgshare.com/i/5eA.svg', width='32', style='width: 32px;')
                li
                  img(src='https://svgshare.com/i/5f_.svg', width='32', style='width: 32px;')


    router-view
</template>

<script>
import Accordion from './components/Accordion';

export default {
  components: {
        Accordion,

    },
  data () {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Repair', url: '/repair'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ],

      collapsibleItems: [
        {
          header: 'Header 1',
          body: 'he point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
        },
        {
          header: 'Header 2',
          body: 'he point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
        },
        {
          header: 'Header 3',
          body: 'he point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
        },
        {
          header: 'Header 4',
          body: 'he point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
        },
        {
          header: 'Header 1',
          body: 'he point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
        }
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

// footer
// body {
//   height: 100%; min-width:900px;
// }
html
  position relative
  min-height 100%

footer
  // margin-top 200px
  position: absolute;
  height: 50px
  // background: #ccc;
  bottom 0
  left 0
  width: 100%;
  padding-top 50px
  .main-page
    height 100vh
    background: #222
    // margin-top 50px
    display flex
    flex-direction column
    align-content center
    align-items center
    padding-top 5rem
    h1
      color #fafafa
      font-family $mainFont
      margin-bottom 2rem
      font-size 1.7rem

    // contact
    // footer
    .footer-wrapper
      width: 100%;
      max-width: 1200px
      margin: auto
      .footer-contact
        margin-top 7rem
        width: 100%
        height: auto
        color:#555
        display:flex
        justify-content center
        flex-flow:wrap
        margin-left 110px
        .col
          width: 300px
          h4
            color #b7b7b7
            margin: 0
            padding: 0
            font-size: .9em
            padding: 20px 0px 5px 0px
            letter-spacing: 1px
          ul
            list-style-type: none
            margin: 0
            padding: 0
            li
              font-size: .8em
              padding: 2px 0px 2px 0px
              cursor: pointer
              color #848484
              &:hover
                color #b7b7b7
        .col.social ul li
          display: inline-block;
          padding-right: 5px !important;



h2
  margin-top 50px


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
