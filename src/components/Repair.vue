<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-2 Tasks
        input(
          type="text"
          placeholder="What we will repair?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        textarea(
          type="text"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list
          input.what-repair--radio(
            type="radio"
            id="radioNotebook"
            value="Notebook"
            v-model="whatRepair"
          )
          label(
            for="radioNotebook"
          ) Notebook
          input.what-repair--radio(
            type="radio"
            id="radioPhone"
            value="Phone"
            v-model="whatRepair"
          )
          label(
            for="radioPhone"
          ) Phone
          input.what-repair--radio(
            type="radio"
            id="radioTablet"
            value="Tablet"
            v-model="whatRepair"
          )
          label(
            for="radioTablet"
          ) Tablet
        .total-model
          .total-model__notebook(
            v-if="whatRepair === 'Notebook'"
          )
            span Total model Notebook
          .total-model__phone(
            v-if="whatRepair === 'Phone'"
          )
            span Total model Phone
          .total-model__tablet(
            v-if="whatRepair === 'Tablet'"
          )
            span Total model Tablet

    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
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
  data (){
    return {
      taskTitle: '',
      taskDescription: '',
      whatRepair: 'Notebook',
      taskId: 3,
      tasks: [
      {
        'id': 1,
        'title': 'Lenovo',
        'description': 'I need help: my laptop broke and I need to fix it urgently,I need help: my laptop broke and I need to fix it urgently',
        'whatRepair': 'Notebook',
        'model': '',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'iPhone',
        'description': 'I need help: my laptop broke and I need to fix it urgently',
        'whatRepair': 'Phone',
        'model': '',
        'completed': false,
        'editing': false
      }
    ],
    }
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/e686c0b0ae.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {
    newTask () {
      if (this.taskTitle === ''){
				return
			}
      this.tasks.push({
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatRepair: this.whatRepair,
        completed: false,
        editing: false
      })

      //Reset
			this.taskId += 1
			this.taskTitle = ''
			this.taskDescription = ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.option-list
  display flex
  .what-repair--radio
    margin-right 10px
  label
    margin-right 20px
    &:last-child
      margin-right 0
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
