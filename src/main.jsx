import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HangMan } from './components/HangMan/HangMan.jsx'
import { PageNotFound } from './pages/PageNotFound/PageNotFound.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { TicTacToe } from './components/TicTacToe/TicTacToe.jsx'
import { Simon } from './components/Simon/Simon.jsx'


const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout />,
   children: [
    {
      index: true,
      element: <App />,
    },
    {
      path: "hangman",
      element: <HangMan />
    },
    {
      path: "tictactoe",
      element: <TicTacToe />
    },
    {
      path: "simon",
      element: <Simon />
    }
   ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  

 
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
  
)
