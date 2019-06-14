<template lang="pug">
  .content-wrapper
    section
      .container
        h1.title PAGE NOT FOUND!
        p Go to &nbsp
          router-link.link(to='/') main page?
</template>

<script>
export default {
  data (){
    return {}
  }
}
</script>

<style lang="stylus" scoped>

.content-wrapper
    align-items: center
    justify-content: center
    min-height: 50vh
    text-align center
.title
  margin-bottom 20px
  color #333333
  font-size 30px
  font-weight bold

.link
  cursor pointer
  border-bottom 1px solid #085ff7
  color #085ff7

</style>
