import { useState, useEffect } from 'react';
import { fetchPosts } from './fetchPosts';
interface PostI{
    userId:number,
    id:number,
    title:string,
    body:string
}

export const usePosts = () => {
    
    const [ isLoading, setisLoading ] = useState(true);
    const [ posts, setPosts ] = useState<PostI[]>([])

    useEffect(() => {
        // Carga de los Posts
        fetchPosts()
            .then( posts => {
                setisLoading(false);
                setPosts( posts );
            })
    }, [])


    return {
        isLoading,
        posts
    }
}