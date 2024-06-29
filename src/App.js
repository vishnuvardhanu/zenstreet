import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Clients from './pages/clients/clients';
import Notes from './pages/notes/notes';
import Session from './pages/session/session'
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Dashboard/>,
    children:[
      { index:true , element:<Clients/>},
      { path:'/home', element:<Clients/>},
      { path:'/notes', element:<Notes/>},
    ]
  },
  {
    path:'/session',
    element:<Session/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;