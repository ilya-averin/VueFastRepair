export default class Task {
  constructor (
    title,
    description,
    whatRepair,
    model,
    completed,
    editing,
    user = null,
    id = null
  ) {
    this.title = title
    this.description = description
    this.whatRepair = whatRepair
    this.model = model
    this.completed = completed
    this.editing = editing
    this.user = user
    this.id = id
  }
}
