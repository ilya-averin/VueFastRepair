<template lang="pug">
  .content-wrapper
    section
      .container
        .task-list__header
          h1.ui-title-2 Myrepair Tasks
          //- buttons all,active,completed
          .buttons-list
            //- p {{ filter }}
            .button.button--plain.button-primary(
              @click="filter = 'active'"
            ) Active

            .button.button--plain.button-primary(
              @click="filter = 'completed'"
            ) Completed

            .button.button--plain.button-primary(
              @click="filter = 'all'"
            ) All

        //- TASKS
        .task-list
          .task-item(
            v-for="task in tasksFilter"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .ui-card.ui-card--shadow
              .task-item__info
                .task-item__main-info
                  span.ui-label.ui-label--light {{ task.whatRepair }}
                  span
                    | Status:
                    i.fas.fa-circle
                span.button-close
              .task-item__content
                .task-item__header
                  .ui-checkbox-wrapper
                      input.ui-checkbox(
                        type='checkbox'
                        v-model="task.completed"
                      )
                  span.ui-title-3 {{ task.title }}
                .task-item__body
                  p.ui-text-regular {{ task.description }}
</template>

<script>
export default {
  data () {
    return {
      filter: 'active',

    }
  },
  computed: {
    tasksFilter () {
      if (this.filter === 'active'){
          return this.$store.getters.taskNotCompleted
      } else if (this.filter === 'completed'){
          return this.$store.getters.taskCompleted
      } else if (this.filter === 'all'){
          return this.$store.getters.tasks
      }
      return this.filter === 'active'
    }
  }
}
</script>

<style lang="stylus" scoped>

// buttons
// .buttons-list
//   margin-right: 10px;
//   .button.button--round.button-primary
    // padding .3rem .9rem
    // font-size 1rem
    // @media screen and (max-width: phoneWidth)
    //   padding .3rem .9rem
    // @media screen and (max-width: smPhoneWidth)
    //   font-size .5rem

// TASKS
.task-list__header
  display flex
  justify-content space-between
  align-items center
  margin-bottom 30px
  flex-flow wrap
  @media screen and (max-width: phoneWidth)
    display block
  .ui-title-2
    margin-bottom 10px
    @media screen and (max-width: phoneWidth)
      font-size 1rem
  .buttons-list
    // border-radius 30px
    .button.button--plain.button-primary
      margin-right 5px
      border-radius 9px


.task-item
  margin-bottom 20px
  .ui-checkbox:checked:before
    border-color #909399
  &.completed
    .ui-title-3,
    .ui-text-regular,
    // .ui-tag
      text-decoration line-through
      color #909399

// TASKS
.task-item
  margin-bottom 20px
  &:last-child
    margin-bottom 0

.ui-label
  margin-right 8px
  border-radius 3px
  // background-color blue

.task-item__info
  display flex
  align-items center
  justify-content space-between
  margin-bottom  20px
  i.fas.fa-circle
    margin-left 8px
    color tomato
  .button-close
    width 20px
    height @width

.task-item__header
  display flex
  align-items center
  margin-bottom 10px
  .ui-checkbox-wrapper
    margin-right 10px
    // margin-top 10px
    .ui-title-3
      margin-bottom -5px

</style>

