import { createContext, useReducer } from "react";

const initialState = [
    {
      id: 1,
      text: "Yemek yap",
      completed: false
    },
    {
      id: 2,
      text: "Alışveriş yap",
      completed: true
    },
    {
      id: 3,
      text: "Spor yap",
      completed: false
    }
  ];

export const TodoContext = createContext()

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return {
            todo: [action.payload, ...state.todo]
          }
        case 'DELETE_TODO':
          return {
            todo: state.todo.filter((b) => b._id !== action.payload._id)
          }
      default:
        return state
    }
  }

  export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
      todo: initialState
    })
    return(
        <TodoContext.Provider value={{...state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
  }