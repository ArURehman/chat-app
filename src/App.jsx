import AppRouting from "./router/AppRouting";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

const App = () => {

  return (
    <>
      <Provider store={store}>
        <AppRouting/>
        <ToastContainer/>
      </Provider>
    </>
  )
}

export default App
