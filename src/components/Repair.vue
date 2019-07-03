<template lang="pug">
  .content-wrapper-model
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
          //- Notebook
          .total-model__notebook(
            v-if="whatRepair === 'Notebook'"
          )
            span.total-title How laptop model?
            input.model-input(
              type='number'
              v-model='notebookModel'
            )

          //- Phone
          .total-model__phone(
            v-if="whatRepair === 'Phone'"
          )
            span.total-title How phone model?
            input.model-input(
              type='number'
              v-model='phoneModel'
            )
          //- Tablet
          .total-model__tablet(
            v-if="whatRepair === 'Tablet'"
          )
            span.total-title How model tablet?
            input.model-input(
              type='number'
              v-model='tabletModel'
            )

      .button-send
        .button.button--round.button-primary(
        @click="newTask"
      ) Send

</template>

<script>
export default {
  data (){
    return {
      taskTitle: '',
      taskDescription: '',
      whatRepair: '',
      // taskId: 3,
      // model
      notebookModel: '',
      phoneModel: '',
      tabletModel: ''
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
      let model
      if
        (this.whatRepair === 'Phone'){
          model = this.phoneModel
        } else if
          (this.whatRepair === 'Notebook'){
          model = this.notebookModel
          } else {
            model = this.tabletModel
          }

      //Reset
      this.notebookModel = '',
      this.phoneModel    = '',
      this.tabletModel   = ''

      const task = {
        // id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatRepair: this.whatRepair,
        model,
        completed: false,
        editing: false
      }
      this.$store.dispatch('newTask', task)

      console.log(task)

      //Reset
			// this.taskId += 1
			this.taskTitle = ''
			this.taskDescription = ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.content-wrapper-model
  max-width 1280px
  // flex-direction column
  // margin-left auto
  // margin-right auto

.option-list
  display flex
  align-items center
  .what-repair--radio
    margin-right 10px
    margin-top 10px
  label
    margin-right 20px
    font-size 1.4rem
    &:last-child
      margin-right 0

.total-model
  margin-top 30px

.total-title
  display block
  margin-bottom 6px
  font-size 1rem

.model-input
  max-width 400px
  margin-right 10px

.button-send
  margin-left 2.4rem
  // display flex
	// justify-content space-between
  .button--round.button-primary
    border-radius 5px
</style>

