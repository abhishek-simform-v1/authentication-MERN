import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routerOfApp } from "./routes/routes";
RouterProvider;
function App() {
  return (
    <div className="App">
      <RouterProvider router={routerOfApp}></RouterProvider>
    </div>
  );
}

export default App;
