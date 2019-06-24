<template lang="pug">
  .collapsible-wrapper
    .collapsible-item(v-for='(item, index) in customItems')
      .collapsible-item-header(@click='activeBody(index)') {{ item.header }}
      transition(name='slide-fade')
        .collapsible-item-body(v-html='item.body', v-if='item.active')

</template>

<script>
export default {
  name: 'Accordion',
  props: ['items'],
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
      color #fafafa
      font-size 0.9rem
      border-radius 2px
      background: transparent
      border 1px solid #878787
      transition: all .3s cubic-bezier(.02,.01,.47,1);
      // &.collapsible-item-body
      //   background-color: red
      &:hover
        background-color: #888
        color #000
        transition 0.1s
        transform: translate(0,-3px);
			  transition-delay: 0s !important;

        // margin-bottom 1px
        // -webkit-transition: all 3s cubic-bezier(.98,0,1,.28);
        // -moz-transition: all 3s cubic-bezier(.98,0,1,.28);
        // -o-transition: all 3s cubic-bezier(.98,0,1,.28);
        // transition: all 3s cubic-bezier(.98,0,1,.28);
      // &:active
      //   background-color: red
    .collapsible-item-body
      padding 10px
      background transparent
      color #fafafa
      font-size 0.9rem
      border 1px solid #878787
      border-radius 3px
      margin-bottom 10px
      margin-top -1px


// .active
//   background-color: red

.slide-fade-enter-active

.slide-fade-leave-active
  max-height: 0;
  transition-property all height
.slide-fade-enter,.slide-fade-leave-to
  max-height: 0;

</style>

