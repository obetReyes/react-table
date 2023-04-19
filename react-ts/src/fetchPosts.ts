
interface PostI{
    userId:number,
    id:number,
    title:string,
    body:string
}
export const fetchPosts = async():Promise<PostI[]> => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await fetchData.json()
    return posts;
}