import firebase from 'firebase/app'

import Task from './task_help'

export default {
  state: {
    tasks: []
  },
  mutations: {
    loadTasks (state, payload) {
      state.tasks = payload
    },
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    async loadTasks ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        // get tasks
        const task = await firebase.database().ref('tasks').once('value')
        // console.log(task)
        const tasks = task.val()
        // console.log(tasks)
        const tasksArray = []

        Object.keys(tasks).forEach(key => {
          const t = tasks[key]
          tasksArray.push(
            new Task(
              t.title,
              t.description,
              t.whatRepair,
              t.model,
              t.completed,
              t.editing,
              t.user,
              key
            )
          )
        })

        commit('loadTasks', tasksArray)
        // console.log(tasks)
        // const newTask = new Task(
        //   payload.title,
        //   payload.description,
        //   payload.whatRepair,
        //   payload.model,
        //   payload.completed,
        //   payload.editing
        // )
        // create table in firebase


        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async newTask ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newTask = new Task(
          payload.title,
          payload.description,
          payload.whatRepair,
          payload.model,
          payload.completed,
          payload.editing,
          getters.user.id
        )
        // create push table in firebase
        const task = await firebase.database().ref('tasks').push(newTask)
        // console.log(task)
        commit('newTask', {
          ...newTask,
          id: task.key
        })

        commit('newTask', payload)

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    // delete tasks
    async deleteTask ({commit}, id) {
      commit('clearError')
      commit('setLoading', true)
      try {
        await firebase.database().ref('tasks').child(id).remove()

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    tasks (state, getters) {
      return state.tasks.filter(task => {
        return task.user === getters.user.id
      })
    },
    taskCompleted (state, getters) {
      return getters.tasks.filter(task => {
        return task.completed
      })
    },
    taskNotCompleted (state, getters) {
      return getters.tasks.filter(task => {
        return task.completed === false
      })
    }
  }
}
