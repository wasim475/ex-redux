import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../Feature/posts/postSlice'


const Posts = () => {
    const {posts, isLoading, isError, error} = useSelector(state=>state.postz)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])
    let content;
    if(isLoading){
        content = <h1>Loading...</h1>
    }
    if(!isLoading && isError){
        content = <h1>{error}</h1>
    }
    if(!isLoading && !isError && posts.length <1){
        content = <h1>No post found</h1>
    }
    if(!isLoading && !isError && posts.length >0){
        content = <ul>
            {
                posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    }

  return (
    <div>
      {content}
    </div>
  )
}

export default Posts
