<template lang="pug">
  .content-wrapper
    h1 This is Fast Repair
    section.block_info
      img(src='../img/laptop.png', alt='альтернативный текст')
      .text
        p.big It is a long established fact
        p beby the readable of a page when lookingits layout.
          The point of using Lorem is that ita more-or-less
          normal It is a long.

    //- two section
    .content-wrapper
      section.two_window
        .two_window_overlay
          img(src='../img/Symbol 1 – 1.png', alt='')
          p Have a
            br
            |  question?
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
            p Create Now >
            img.gallery-image(src='../img/iphonexr.jpg', alt='')
          .three-window_item
            p Create Now >
            img.gallery-image(src='../img/laptop.jpg', alt='')
          .three-window_item
            p Create Now >
            img.gallery-image(src='../img/tablet.png', alt='')

    //- four section
    .content-wrapper
      section.four-window
        .four-window_block
          h2 Accordion with symbols
          p
            | In this example we have added a "plus" sign to each button. When the user clicks on the button, the "plus" sign is replaced with a "minus" sign.
          button.accordion Section 1
          .panel
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          button.accordion Section 2
          .panel
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          button.accordion Section 3
          .panel
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.



</template>

<script>
export default {
  data (){
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/main.styl'
// one section
.content-wrapper h1{
  font-size: 4rem;
  color: #303030;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
}
.text{
  width: 480px;
  height: 230px;
  border-left: 1px solid #999;
  align-self: flex-start;
  p{
    margin-left: 3rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    align-self: center;
    color: #222
  }
}
 .block_info{
   margin-top: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: row wrap;
   margin-bottom: 8rem;
  //  flex-direction row
  //  flex-wrap wrap
 }

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
      position: absolute;
      // opacity: 0.9;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background #000
      @media screen and (max-width: phoneWidth)
        justify-content: center;
        align-items: center;
        flex-direction: column
      img
        // text-align center
        max-width: 100%
        // min-height 50%
        z-index 999
        margin-right 3rem
        @media screen and (max-width: phoneWidth)
          max-width: 70%
          min-height 35%
          order: 2
          margin-left: auto;
          margin-right: auto;
      p
        font-size 3rem
        color #fff
        order: 1;
        @media screen and (max-width: phoneWidth)
          font-size 4rem
      // background-image: -moz-linear-gradient( 150deg, rgb(61, 204, 194) 0%, rgb(110,69,226) 100%);
      // background-image: -webkit-linear-gradient( 150deg, rgb(61, 204, 194) 0%, rgb(110,69,226) 100%);
	    // background-image: -ms-linear-gradient( 150deg, rgb(61, 204, 194) 0%, rgb(110,69,226) 100%);
  p.big
    font-size 2rem
    color #000

// three section
.content-wrapper
  width: 100%;
  .three-window
    width: 100%;
    height: 110vh;
    max-width: 100%;
    background: linear-gradient(#522F40, 60%, #B67255);
    // background #000
    .three-window_block
      display flex
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      margin-top 5rem
      .three-window_btn
        color: #fff;
        font-size: 20px;
        border: 1px solid #fff;
        border-radius: 9px;
        padding: .3rem 1rem;
        background-color: transparent;
        cursor: pointer;
        transition: color .20s;
        margin-right 10rem
        &:hover
          color: #ccc;
          // background-color: #fff;
          background-image: none;
          border-color: #ccc;
      p
        font-size: 25px
        color: #fff
    .three-window_gallery
      display: flex
      justify-content: center;
      align-items: center;
      .three-window_item
        border-radius: 2px
        margin-top: 12rem;
        width: 270px;
        height: 270px;
        overflow: hidden;
        margin-right 2rem
        // cursor: pointer;
        box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4)
        transition: 0.5s
        &:hover
          transition: 0.5s
          -webkit-transform: scale(1.01);
          -moz-transform: scale(1.01);
          -o-transform: scale(1.01);
          -webkit-box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
          -moz-box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
          box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
        .gallery-image
          display: block
          width: 100%
          height: 100%
          object-fit: fill
        p
          z-index: 99;
          position: absolute;
          color: #2459d6
          font-size: 20px;
          margin-top: 200px;
          margin-left: 20px;
          cursor pointer
          font-size: 1rem

// four section
.content-wrapper
  width: 100%;
  .four-window
    width: 100%;
    height: 110vh;
    max-width: 100%;
    background: linear-gradient(#522F40, 60%, #B67255);
    // background #000
    .four-window_block
      // display flex
      // justify-content: center
      // align-items: center
      margin-top 5rem
//       .accordion
//         background-color: #eee
//         color: #444
//         cursor: pointer
//         padding: 18px
//         width: 100%
//         border: none
//         text-align: left
//         outline: none
//         font-size: 15px
//         transition: 0.4s


//       .active, .accordion:hover
//         background-color: #ccc


//       .accordion:after
//         content: '\002B'
//         color: #777
//         font-weight: bold
//         float: right
//         margin-left: 5px


//       .active:after
//         content: "\2212"


//       .panel
//         padding: 0 18px
//         background-color: white
//         max-height: 0
//         overflow: hidden
//         transition: max-height 0.2s ease-out



</style>
