import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
      const auth = localStorage.getItem("auth")
      if(auth == null){
        navigate("/sign-in")
      }
    }, [])

  return (
    <div>Home</div>
  )
}

export default Home