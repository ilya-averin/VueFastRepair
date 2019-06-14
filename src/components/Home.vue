<template lang="pug">
  .content-wrapper
    h1 This is Fast Repair
    section.block_info
      //- img(src='./img/laptop.png', alt='альтернативный текст')
      .text
        p.big It is a long established fact
        p beby the readable of a page when lookingits layout.
          The point of using Lorem is that ita more-or-less
          normal It is a long.

    .content-wrapper
      section.two_window
        .main-overlay
          //- img(src='./img/Symbol 1 – 1.png', alt='')
          p Have a
            br
            |  question?
            br
            | just text

    .content-wrapper
      section.three_window
        .one_block
          button.btn_block How it works
          p There are many variations of passages
            br
            alteration in some form, by injected humour,
            br
            or randomised words which
        .gallery
          .gallery-item
            p Create Now >
            //- img.gallery-image(src='./img/iphonexr.jpg', alt='')
          .gallery-item
            p Create Now >
            //- img.gallery-image(src='./img/laptop.jpg', alt='')
          .gallery-item
            p Create Now >
            //- img.gallery-image(src='./img/tablet.png', alt='')
</template>

<script>
export default {
  data (){
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/main'
// @import '../assets/style/app'
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

.content-wrapper
  width: 100%;
  .two_window
    position: relative;
    width: 100%;
    height: 130vh;
    // background-color: #333;
    max-width: 100%;
    // background-image: url(./img/mob2.jpg);
    .main-overlay
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
      background: linear-gradient(180deg, #000 100%);
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


.content-wrapper
  width: 100%;
  .three_window
    width: 100%;
    height: 100vh;
    max-width: 100%;
    background: linear-gradient(#522F40, 60%, #B67255);
    // background #000
    .one_block
      display flex
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      margin-top 2rem
      .btn_block
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



.gallery
  display: flex
  justify-content: center;
  align-items: center;
  .gallery-item
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
      -moz-transform: scale(1.2);
      -o-transform: scale(1.2);
      -webkit-box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
      -moz-box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
      box-shadow: 0px 0px 33px 5px rgba(0,0,0,0.43);
    .gallery-image
      display: block
      width: 100%
      height: 100%
      object-fit: cover
      transition: transform 400ms ease-out
      opacity: 1
      transition 0.5s
      &:hover
        transition 0.5s
        // transform: scale(1.02)
        opacity: 0.8
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
