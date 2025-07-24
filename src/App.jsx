    import React, { useState } from 'react'
    import { v4 as uuidv4 } from 'uuid'

    const App = () => {
      const [todos, setTodos] = useState([])
      const [newTodo, setNewTodo] = useState('')

      const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }])
          setNewTodo('')
        }
      }

      const toggleTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        )
      }

      const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
      }

      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="text-4xl font-bold text-white mb-8">Fancy Todo App</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Add a new todo"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button
                onClick={addTodo}
                className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
            <ul className="space-y-2">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`flex items-center justify-between px-4 py-2 rounded-md ${
                    todo.completed
                      ? 'bg-gray-200 line-through text-gray-500'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="mr-2 focus:ring-2 focus:ring-indigo-500"
                    />
                    <span>{todo.text}</span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    export default App