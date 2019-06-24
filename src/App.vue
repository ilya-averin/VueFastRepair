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
    //- footer_section
    footer
      .main-page
        h1 Answers to popular questions
        accordion(:items='collapsibleItems')
        .footer-content
          .about
            h3 About
            p
              | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reiciendis unde quae aperiam ratione at!
            p
              i.ion-ios-location
              |  34 Street Name, City Name Here, United States
            p
              i.ion-ios-telephone
              |  +1 234 5678 910
            p
              i.ion-ios-email
              |  info@alotan.com
          .links
            h3 Links
            a(href='#') About
            a(href='#') Hairstyle
            a(href='#') Contact
          .blog
            h3 Blog
            a(href='#')
              small March 20, 2018
              p Lorem ipsum dolor sit amet.
            a(href='#')
              small March 20, 2018
              p Lorem ipsum dolor sit amet.
            a(href='#')
              small March 20, 2018
              p Lorem ipsum dolor sit amet.
          .social
            h3 Connect
            a(href='#')
              i.ion-social-facebook
            a(href='#')
              i.ion-social-twitter
            a(href='#')
              i.ion-social-instagram
            a(href='#')
              i.ion-social-youtube
          .copyright
            p Copyright ©2018 All rights reserved | Made by Su.





    router-view
</template>

<script>
import Accordion from './components/Accordion';

export default {
  components: {
        Accordion
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
    // justify-content center
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
    // background: #f2f2f2;
    // padding-top: 100px;
    // padding-bottom: 100px;
    // .footer-content
    //   display: grid
    //   grid-template-columns: repeat(5, 1fr)
    //   grid-gap: 10px
    // .footer-content
    //   /* border: 1px solid black; */
    //   padding: 10px;
    //   line-height: 1.5em
    // .footer-content>.about
    //   grid-column: span 2
    // .footer-content>div i
    //   font-size: 20px
    //   padding-right: 20px
    // .footer-content>div>*
    //   margin-bottom: 20px
    // .footer-content>div>a
    //   color: black;
    //   text-decoration: none
    //   transition: 0.2s
    //   display: block
    // .footer-content>.about>p:nth-child(n+3),
    // .footer-content>div>a:hover,
    // .footer-content>.blog small,
    // .footer-content>.copyright
    //   color: #999
    // .footer-content>.social>a
    //   display: inline-block
    //   text-align: center
    // .footer-content>.copyright
    //   grid-column: span 5
    //   text-align: center
    // @media (max-width: 600px)
    //   .footer-content{
    //     display: block





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
