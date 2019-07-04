// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
// import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(
  Vuelidate,
  // Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
        apiKey: "AIzaSyAgdvIOENjGxtxTEtsdlaP2uUbrZRFoGwA",
        authDomain: "repair-request-7aa7c.firebaseapp.com",
        databaseURL: "https://repair-request-7aa7c.firebaseio.com",
        projectId: "repair-request-7aa7c",
        storageBucket: "",
        messagingSenderId: "68598953921",
        appId: "1:68598953921:web:841bc00a545c0045"
    };
    firebase.initializeApp(firebaseConfig);
    // Auth chek
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('loggedUser', user)
      }
      // loading all tasks
      this.$store.dispatch('loadTasks')
    })
  }
})
