//rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layout
import Root from "./layout/Root"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import QuizPage from "./pages/QuizPage"

function App() {
  const routes=createBrowserRouter([
    {
path:"/",
element:<Root/>,
errorElement:<ErrorPage/>,
children:[
  {
    index:true,
    element:<Home/>
  },
  {path:"/quiz/:title",
    element:<QuizPage/>
  }
]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App