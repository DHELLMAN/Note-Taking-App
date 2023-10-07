import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import RootLayout from './components/RootLayout';
import SignUp from './pages/SignUp';
import ViewNote from './pages/ViewNote';
import ErrorElement from './pages/ErrorElement';

const router = createBrowserRouter([
  { path:'/', 
    element: <RootLayout/>,
    errorElement:<ErrorElement/>,
    children: [
      { index:true, element:<Home/>},
      { path:'login', element:<Login/>},
      { path:'signup', element:<SignUp/>},
      { path:'userDashboard', 
        children:[
          { index:true, element:<UserDashboard/>},
          { path:'viewNote', element:<ViewNote/>}
        ]
      },
    ]}
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
