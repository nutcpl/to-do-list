export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
})

export const delTodo = (key) => ({
    type: "DEL_TODO",
    payload: key
})


