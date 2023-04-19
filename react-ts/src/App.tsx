import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './Table'
import { usePosts } from './usePosts'
interface PostI{
    userId:number,
    id:number,
    title:string,
    body:string
}
function App() {

  const { isLoading, posts } = usePosts();
  const [data, setData] = useState<PostI[]>([])
 const [currentPage, setCurrentPage] = useState<number>(0)
 
  const filteredPosts = ():PostI[] => {
    return posts.slice(currentPage, currentPage +5)
  } 

  const nextPage = () => {
    setCurrentPage(currentPage+ 5)
  }
  const previousPage = () => {
    if(currentPage > 0)
    setCurrentPage(currentPage - 5)
  }
  return (
    <div className="App"> 
    {isLoading ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <>
<Table data={filteredPosts()}/> 
      <button onClick={previousPage}>previous page</button>
      <button onClick={nextPage}>next page</button>
    </>}     
    </div>
  )
}

export default App
