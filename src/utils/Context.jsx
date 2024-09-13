import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const dentistaStates= createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const initialState = {
  theme:"light",
  favs:lsFavs,
  lista:[]
}

const Context = ({ children }) => {
  // Estado que gestiona el tema (light o dark)
  //const [theme, setTheme] = useState("light");
  //const [favs, setFavs] = useState(lsFavs);
  //const [lista,setLista]= useState([])
  const [state,dispatch] = useReducer(reducer,initialState)
  const url ="https://jsonplaceholder.typicode.com/users";

    // Función para cambiar entre light y dark
  /*const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };*/
  
  //home
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      //setLista(res.data)
      dispatch({type: "GET_DENTISTAS", payload:res.data});
    });
  }, []);

  //favs
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  //tema
  useEffect(() => {
      document.body.className = state.theme;
      document.querySelector('nav').className=state.theme;
    }, [state.theme]);

  return (
    <dentistaStates.Provider value={{ state, dispatch }}> 
      {children}
    </dentistaStates.Provider>
  );
};

export default Context;

export const useDentistaStates = () => useContext(dentistaStates);


