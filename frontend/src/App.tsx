import { useState } from "react"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    console.log(username)
    console.log(password)
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="grid grid-cols-1 gap-3 w-96 p-5 rounded-lg border border-gray-300">
      <div className="text-xl font-semibold text-center">Welcome To Keep Clone</div>
      <input className="border border-gray-300 p-3 rounded bg-white" type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
      <input className="border border-gray-300 p-3 rounded bg-white" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="w-28 rounded bg-blue-500 py-3 mx-auto" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App
