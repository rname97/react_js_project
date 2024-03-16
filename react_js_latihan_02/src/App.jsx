
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Page/HomePage'
import BlogPage from './Page/BlogPage'
import NewsLetterPage from './Page/NewsLetterPage'

function App() {

return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/blog' element={<BlogPage />}></Route>
                <Route path='/newsletter' element={<NewsLetterPage />}></Route>
            </Routes>
        </BrowserRouter>
    </>
)
}

export default App
