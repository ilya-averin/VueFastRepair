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
                li Login
                li Registration
            .col.social
              h4 Connect
              ul
                li
                  //- img(src='https://svgshare.com/i/5fq.svg', width='32', style='width: 32px;')
                  i.fab.fa-facebook-square
                li
                  i.fab.fa-instagram
                li
                  i.fab.fa-vk


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
        {title: 'Myrepair', url: '/myrepair'},
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
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/e686c0b0ae.js')
    document.head.appendChild(recaptchaScript)
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
      // width: 100%;
      max-width: 1200px
      margin: auto
      margin-bottom: 2rem
      border-bottom 1px solid #666
      .footer-contact
        margin-top 7rem
        width: 100%
        height: auto
        color:#555
        display:flex
        justify-content center
        flex-flow:wrap
        margin-left 110px
        display flex
        @media screen and (max-width: phoneWidth)
          flex-flow: nowrap
          margin-left 1rem
          justify-content space-around
        .col
          width: 300px
          @media screen and (max-width: phoneWidth)
            width: 80px
          h4
            color #b7b7b7
            margin: 0
            padding: 0
            font-size: .9em
            padding: 20px 0px 5px 0px
            // letter-spacing: 1px
            @media screen and (max-width: phoneWidth)
              font-size: .6em
            @media screen and (max-width: smPhoneWidth)
              font-size: .6em
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
              @media screen and (max-width: phoneWidth)
                font-size: .5em
              @media screen and (max-width: smPhoneWidth)
                font-size: .5em
        .col.social ul li
          display inline-block
          margin-right 10px
          i
            font-size: 1.5rem
          // @media screen and (max-width: phoneWidth)
          //   width 50%
          //   height 50%





h2
  margin-top 50px


.navbar-list
  margin-right: 0
  @media screen and (max-width: phoneWidth)
    margin-right: 0
  @media screen and (max-width: tableWidth)
    margin-right: 0
  @media screen and (max-width: smDesktopWidth)
    margin-right: 0

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
