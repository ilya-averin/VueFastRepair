<template lang="pug">
  .collapsible-wrapper
    .collapsible-item(
      v-for='(item, index) in customItems'
      )
      .collapsible-item-header(
        @click='activeBody(index)'
        :class="{active: item.active}"
        ) {{ item.header }}
      transition(name='slide-fade')
        .collapsible-item-body(
          v-html='item.body',
          v-if='item.active'
          )

</template>

<script>
export default {
  name: 'Accordion',
// props: ['items'],
  props: {
    items: {
      type: Array
    }
  },
  data () {

    return {
      collapsibleItems: [],

      isActive: false

    }
  },
  computed: {
    customItems() {
      this.collapsibleItems = this.items.map((item) =>{
        return {
          header: item.header,
          body:   item.body,
          active: false
          }
        }
      );
      return this.collapsibleItems;
    }
  },
  methods: {
    activeBody(index){
      this.collapsibleItems[index].active=!this.collapsibleItems[index].active;
      this.collapsibleItems.forEach((item,ind) =>{
        if(ind!=index){
          item.active=false;
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

.collapsible-wrapper
  width 70%
  height auto
  .collapsible-item
    margin-bottom 1px
    .collapsible-item-header
      cursor pointer
      padding 6px
      background #878787
      color #000
      font-size 0.9rem
      border-radius 2px
      border 1px solid #878787
      transition: all .3s cubic-bezier(.02,.01,.47,1)
      &.active
        background #d9d9d9
        content: '\2212'
      &:after
        content: '\002B'
        color: #000
        float: right;
        padding-right 8px
      &:hover
        background-color: #d9d9d9
        color #000
        transition 0.1s
        transform: translate(0,-3px);
			  transition-delay: 0s !important

    .collapsible-item-body
      padding 10px
      background transparent
      color #fafafa
      font-size 0.9rem
      border 1px solid #878787
      border-radius 3px
      margin-bottom 10px
      margin-top -1px

.slide-fade-leave-active
  max-height: 0;
  transition-property all height
.slide-fade-enter,.slide-fade-leave-to
  max-height: 0;

</style>

