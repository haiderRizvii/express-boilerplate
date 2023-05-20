const Bootcamps = [
  { id: 1, text: 'Rails' },
  { id: 2, text: 'React' },
  { id: 3, text: 'Node' },
]

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(Bootcamps)
  })
}

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    const bootcamp = Bootcamps.find((todo) => todo.id == id)
    resolve(bootcamp)
  })
}

export const create = (todo) => {
  return new Promise((resolve, reject) => {
    Bootcamps.push(todo)
    resolve(todo)
  })
}
