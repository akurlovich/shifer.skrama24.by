import { FC, Suspense } from 'react'
import { Routes, Route } from "react-router";
import { About } from './components/About/About';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import MainLayout from './components/RoutersComponents/MainLayout/MainLayout';
import './scss/main.scss'

const App: FC = () => {
  // const [count, setCount] = useState(0)

  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/> 
          <Route path='cart' element={<Cart/>}>
            {/* <Route path='*' element={<Cart/>}/> */}
          </Route>
          <Route path='about' element={<About/>}>
            {/* <Route path='*' element={<About/>}/> */}
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    // </Suspense>
  )
}

export default App
