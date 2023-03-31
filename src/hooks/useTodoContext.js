//usecontext yapılarını ben bu şekilde kullanıyorum. tanımladığım contextteki fonksiyonları import edip kullanmak yerine bu şekilde yaparak
//reduxa benzer bir yapı oluşturuyorum ve her useContext kullandığımda benzer yapıyı kullanıyorum.

import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'

export const useTodoContext = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw Error('useTodoContext must be used inside an WorkoutsContextProvider')
  }

  return context
}