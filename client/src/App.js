import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login";
import Single from "./pages/Single"; 
import Write from "./pages/Write";  
import Home from "./pages/Home"; 
import Navbar from "./components/Navbar";   
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./style.scss"
const Layout = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },  {
        path: "/register/:id",
        element: <Register/>,
      },

    ]
      
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}


export default App;
