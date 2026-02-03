import Navbar from "./component/layout/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cars from "./pages/Cars"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import PageNotFound from "./pages/PageNotFound"
import Layout from "./component/layout/Layout"
import CarSinglePage from "./pages/CarSinglePage"

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:id" element={<CarSinglePage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
