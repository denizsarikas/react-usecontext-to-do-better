import { createContext, useReducer } from "react";

const initialState = [  {
  id: 1,
  text: "Backend öğren",
  completed: false,
},
{
  id: 2,
  text: "Client Memoryde en azından birinde uzmanlaş: useContext, redux",
  completed: false,
},
{
  id: 3,
  text: "Blog ve soru sitesini tamamla",
  completed: false,
},
{
  id: 4,
  text: "Bu yazı çok uzun bir yazı çünkü bazı kötü niyetli kullanıcılar sitenin görünümüne veyayapısına zarar vermek amaçlı böyle girişimlerde bulunabilirler, o yüzden uygulamayı geliştirme aşamasında özellikle bir frontend çalışanının bunları düşünerek test etmesi gerekmektedir",
  completed: false,
},
{
  id: 5,
  text:"Burasıdaherseyibitisikyazarakbirseyleryapmayacalisanadamlaricintestyapacagımızyeraslındaburadasadececsstebirsatırlıkbirkodeklememizyeterliolacaktırbundakiolaydatextwrapmıydıneydioylebirseydi",
  completed: false,
},];

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [action.payload, ...state.todo],
      };
    case "DELETE_TODO":
      return {
        todo: state.todo.filter((b) => b.id !== action.payload.id),
      };
      case 'COMPLETE_TODO':
        return {
          todo: state.todo.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, completed: !item.completed };
            }
            return item;
          }),
        };
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todo: initialState,
  });
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
