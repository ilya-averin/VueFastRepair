<template lang="pug">
  .content-wrapper
    section
      .container
        .auth
          .auth_banner
            h1.ui-title-2 Hello baner
            p Please register in order to use in full:
              br
              |  (to request a repair of your equipment)
            //- img.banner(src='../../img/sign-in.png', alt='')
          .auth_form
            span.ui-title-2 Registration
            form(@submit.prevent="onSubmit")
              .form-item(:class="{ 'errorInput': $v.email.$error }")
                input(
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  :class="{ 'error': $v.email.$error }"
                  @change="$v.email.$touch()"
                )
                .error(v-if="!$v.email.required") Field is required
                .error(v-if="!$v.email.email") Email is not correct
              .form-item(:class="{ 'errorInput': $v.password.$error }")
                input(
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  :class="{ 'error': $v.password.$error }"
                  @change="$v.password.$touch()"
                )
                .error(v-if="!$v.password.required") Password is required.
                .error(v-if="!$v.password.minLength")
                  | Password must have at least {{ $v.password.$params.minLength.min }} letters.

              .form-item(:class="{ 'errorInput': $v.repeatPassword.$error }")
                input(
                  type="password"
                  placeholder="Repeat your password"
                  v-model="repeatPassword"
                  :class="{ 'error': $v.repeatPassword.$error }"
                  @change="$v.repeatPassword.$touch()"
                )
                .error(v-if="!$v.repeatPassword.sameAsPassword") Passwords must be identical.
              .buttons-list
                button.button.button--plain.button-primary(
                  type="submit"
                  :disabled="submitStatus === 'PENDING'"
                ) Registration

              .buttons-list.buttons-list--info
                p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
                p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
                p.typo__p(v-if="submitStatus === 'PENDING'") Sending...

              .buttons-list.buttons-list--info
                span Do you have account?
                  router-link(to="/login")  Enter here


</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data (){
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      // console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('submit!!!')
        const user = {
          email:    this.email,
          password: this.password
        }
        console.log(user)
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.auth
  display flex
  justify-content center
  flex-wrap wrap
.auth_banner,.auth_form
  width 50%
  @media screen and (max-width: 768px)
    width 100%
    margin-bottom 30px
    &:last-child
      margin-bottom 0
  p
    color #737373

.auth_form
  max-width 400px

.form-item
  .error
    display none
  &.errorInput
    .error
      display block
      margin-bottom 8px
      font-size 13px
      color #fc5c65
input
  &.error
    border-color #fc5c65
    animation shake .3s
.buttons-list
  text-align left
  margin-bottom 20px
  &.buttons-list--info
    text-align center
    &:last-child
      margin-bottom 0
.button-primary
  border-radius 5px
  &:hover
    backgroun #444ce0
a
  color #444ce0
</style>



