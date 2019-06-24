<template lang="pug">
  //- one section
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
    // margin-bottom 100px
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
        box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4)
        transition: all .3s cubic-bezier(.02,.01,.47,1);
        &:hover
          transform translate(0,-6px)
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


</style>
