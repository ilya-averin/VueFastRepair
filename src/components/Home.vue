<template lang="pug">
  //- one section
  .content-wrapper
    h1 REQUEST REPAIR
    section.block_info
      img.laptop(src='../img/laptop.png', alt='альтернативный текст')
      .text
        p.first-text IT IS ALONG TIME WE
        p Beby the readable of a page when lookingits layout.
          br
          | The point of using Lorem is that ita more
          br
          | normal It is a long.
    //- two section
    .content-wrapper
      section.two_window
        .two_window_overlay
          img.question(src='../img/Symbol 1 – 1.png', alt='')
          p Have a
            br
            | question?
            br
            | just text
    //-  three section
    .content-wrapper
      section.three-window
        .three-window_block
          button.three-window_btn How it works
          p There are many variations of passages
            br
            alteration in some form, by injected humour,
            br
            or randomised words which
        .three-window_gallery
          .three-window_item
            span
              | Create
              br
              | request
            p
              router-link(to="/repair")   How >
            img.gallery-image(src='../img/Group 12.png', alt='wd')
          .three-window_item
            span
              | Create
              br
              | request
            p
              router-link(to="/repair")   How >
            img.gallery-image(src='../img/Group 13.png', alt='')
          .three-window_item
            span
              | Create
              br
              | request
            p
              router-link(to="/repair")   How >
            img.gallery-image(src='../img/Group 14.png', alt='')

</template>

<script>
export default {
  name: 'Home',
  data (){
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/main.styl'

// one section
.content-wrapper
  display flex
  justify-content: center
  align-items: center
  flex-flow: row wrap;
  h1
    font-size: 4rem
    color: #303030
    margin-left: auto
    margin-right: auto
    margin-top: 4rem
    @media screen and (max-width: phoneWidth)
      margin-left: auto
      margin-right: auto
      font-size 3rem
  .block_info
    margin-top: 3rem
    display: flex
    justify-content: center
    align-items: center
    flex-flow: row wrap
    margin-bottom: 8rem
    .laptop
      max-width: 100%
      @media screen and (max-width: phoneWidth)
        max-width: 65%
        margin-left: auto;
        margin-right: auto;
    .text
      width: 480px
      height: 230px
      border-left: 1px solid #b8b8b8
      align-self: center
      @media screen and (max-width: tableWidth)
        border-left: none
      @media screen and (max-width: phoneWidth)
        width: 100%
        border-left: none
      p.first-text
        font-size 2rem
        color #000
        font-weight normal
        @media screen and (max-width: tableWidth)
          font-size 2.3em
        @media screen and (max-width: phoneWidth)
          color 303030
      p
        margin-left: 3rem
        margin-top: 1rem
        font-size: 1.2rem
        color: #222
        @media screen and (max-width: tableWidth)
          font-size: 1.5rem
        @media screen and (max-width: phoneWidth)
          color: #4f4f4f


// two section
.content-wrapper
  width: 100%;
  .two_window
    position: relative;
    width: 100%;
    height: 130vh;
    // background-color: #333;
    max-width: 100%;
    // background-image: url(../img/mob2.jpg);
    .two_window_overlay
      display flex
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      position: absolute
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      // background #000
      background: #282828; /* Old browsers */
      background: -moz-linear-gradient(top,  #282828 68%, #282828 68%, #522f40 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  #282828 68%,#282828 68%,#522f40 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  #282828 68%,#282828 68%,#522f40 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      @media screen and (max-width: phoneWidth)
        justify-content: center;
        align-items: center;
        flex-direction: column
      img.question
        max-width: 100%
        z-index 999
        margin-right 3rem
        @media screen and (max-width: tableWidth)
          max-width: 40%
        @media screen and (max-width: phoneWidth)
          max-width: 70%
          min-height 35%
          order: 2
          margin-left: auto
          margin-right: auto
      p
        font-size 3rem
        color #fff
        order: 1;
        @media screen and (max-width: phoneWidth)
          font-size 4rem
          line-height: 50px
          margin-bottom: 4rem

// three section
.content-wrapper
  width: 100%
  .three-window
    width: 100%
    height: 110vh
    max-width: 100%
    background: linear-gradient(#522F40, 60%, #B67255)
    @media screen and (max-width: phoneWidth)
      height: 120vh
    .three-window_block
      display flex
      justify-content: center
      align-items: center
      flex-flow: row wrap
      margin-top 5rem
      @media screen and (max-width: tableWidth)
        margin-top 0
        justify-content: flex-start
        margin-left 5rem
      @media screen and (max-width: phoneWidth)
        margin-top 0
      .three-window_btn
        color: #fff
        font-size: 20px
        border: 1px solid #fff
        border-radius: 9px
        padding: .3rem 1rem
        background-color: transparent
        cursor: pointer;
        transition: color .20s;
        margin-right 10rem
        &:hover
          color: #ccc;
          // background-color: #fff;
          background-image: none
          border-color: #ccc
        @media screen and (max-width: tableWidth)
          display none
        @media screen and (max-width: phoneWidth)
          // font-size: 10px;
          // margin-bottom 5px
          // margin-top 0
          display none
      p
        font-size: 25px
        color: #fff
        @media screen and (max-width: tableWidth)
          font-size: 1rem
        @media screen and (max-width: phoneWidth)
          font-size: 17px
          display none
    .three-window_gallery
      display: flex
      justify-content: center
      align-items: center
      flex-flow: row wrap
      @media screen and (max-width: phoneWidth)
        margin-bottom 5px
      .three-window_item
        margin-top: 12rem;
        width: 270px
        height: 270px
        margin-right 2rem
        box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4)
        transition: all .3s cubic-bezier(.02,.01,.47,1);
        &:hover
          transform translate(0,-6px)
          -webkit-box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
          -moz-box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
          box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
        @media screen and (max-width: tableWidth)
          width: 150px
          height: 150px
          margin-right 2rem
          &:last-child
            margin-right 0
          margin-top: 5rem;
        @media screen and (max-width: phoneWidth)
          width: 200px
          height: 200px
          &:first-child
            margin-top: 0
          margin-top: 1em
          margin-right 0
        @media screen and (max-width: smPhoneWidth)
          width: 170px
          height: 170px
          margin-top: 8px
          margin-right 0
        .gallery-image
          display: block
          width: 100%
          height: 100%
          border-radius: 4px;
          // object-fit: fill
          // position: relative;
          &:after
            content ''
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            background red
        span
          z-index: 99;
          position: absolute;
          color: #fff
          // color #085ff7
          margin-top: 140px;
          margin-left: 10px;
          cursor pointer
          font-size: 2rem
          font-weight bold
          line-height 80%
          @media screen and (max-width: tableWidth)
            margin-top 60px
            font-size 1.5rem
          @media screen and (max-width: phoneWidth)
            margin-top: 100px
          @media screen and (max-width: smPhoneWidth)
            margin-top: 80px
        p
          z-index: 99;
          position: absolute;
          color: #085ff7
          margin-top: 210px;
          margin-left: 10px;
          cursor pointer
          font-size: 1.3rem
          font-weight normal
          @media screen and (max-width: tableWidth)
            margin-top 110px
          @media screen and (max-width: phoneWidth)
            margin-top: 160px
          @media screen and (max-width: smPhoneWidth)
            margin-top: 137px
        a
          color: #fafafa
          font-weight normal
          &:hover
            color #085ff7

</style>
