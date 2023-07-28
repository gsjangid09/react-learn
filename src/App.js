import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Post from "./route/post"
import PostComment from "./route/comment";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Post/> } />
        <Route path="/post/:id" element={ <PostComment/> } />
      </Routes>
    </div>
  )
}

export default App