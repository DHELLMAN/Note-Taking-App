import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import RootLayout from './components/RootLayout';
import SignUp from './components/SignUp';
import ViewNote from './components/ViewNote';

const router = createBrowserRouter([
  { path:'/', 
    element: <RootLayout/>,
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
