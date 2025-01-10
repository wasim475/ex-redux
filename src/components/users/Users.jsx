import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Feature/user/users'


const Users = () => {
    const {users,isLoading,isError,error} = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(fetchUsers())
    },[dispatch])
    console.log(users)
  return (
    <div>
      
    </div>
  )
}

export default Users
