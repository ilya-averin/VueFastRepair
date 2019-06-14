<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(to="/") FastRepair
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

    //- .content-wrapper
    //-   h1 This is Fast Repair
    //-   section.block_info
    //-     img(src='./img/laptop.png', alt='альтернативный текст')
    //-     .text
    //-       p.big It is a long established fact
    //-       p beby the readable of a page when lookingits layout.
    //-         The point of using Lorem is that ita more-or-less
    //-         normal It is a long.

    //-   .content-wrapper
    //-     section.two_window
    //-       .main-overlay
    //-         img(src='./img/Symbol 1 – 1.png', alt='')
    //-         p Have a
    //-           br
    //-           |  question?
    //-           br
    //-           | just text

    //-   .content-wrapper
    //-     section.three_window
    //-       .one_block
    //-         button.btn_block How it works
    //-         p There are many variations of passages
    //-           br
    //-           alteration in some form, by injected humour,
    //-           br
    //-           or randomised words which
    //-       .gallery
    //-         .gallery-item
    //-           p Create Now >
    //-           img.gallery-image(src='./img/iphonexr.jpg', alt='')
    //-         .gallery-item
    //-           p Create Now >
    //-           img.gallery-image(src='./img/laptop.jpg', alt='')
    //-         .gallery-item
    //-           p Create Now >
    //-           img.gallery-image(src='./img/tablet.png', alt='')


</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        // {title: 'Как работает', url:'/howitworks'},
        // {title: 'О проекте', url:'/about'},
        {title: 'Repair', url: '/repair'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ]
    }
  }
}
</script>

<style lang="stylus">
@import './assets/style/main.styl';
@import './assets/style/app.styl';

</style>
