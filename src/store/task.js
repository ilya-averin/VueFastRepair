export default {
  state: {
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
        'completed': true,
        'editing': false
      }
    ]
  },
  mutations: {
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask ({commit}, payload) {
      payload.id = Math.random()
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    },
    taskCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed
      })
    },
    taskNotCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed === false
      })
    }
  }
}
