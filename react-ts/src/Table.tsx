import { useState } from "react"

interface PostI{
    userId:number,
    id:number,
    title:string,
    body:string
}
interface Props{
    data:PostI[]
}

export const Table = ({data}:Props) => {
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">title</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map((post) => {
        return(
            <tr>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
            </tr>
        )
    })}
  </tbody>
</table>
  )
}
