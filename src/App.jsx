import{Route, createBrowserRouter ,createRoutesFromElements ,RouterProvider} from 'react-router-dom'
import React from "react";
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';


const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={ <MainLayout />}  >
   <Route index element ={ <HomePage />} />
   <Route path='/jobs' element={ <JobsPage /> } />
   <Route path='*' element={ <NotFound /> } />

  </Route>
      )
     );
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
