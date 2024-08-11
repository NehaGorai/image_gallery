import React, { useState } from 'react'
import axios from 'axios'
function App() {
  const [photo, setPhoto] = useState("")
  const [result, setResult] = useState([])
  const changePhoto = () => {
    const apiToken = process.env.REACT_APP_API_TOKEN;
    axios.get(`https://api.lowcodeapi.com/unsplash/search/photos?query=${photo}&page=1&orientation=landscape&api_token=${apiToken}`).then((response) => {
      console.log(response.data.result.results)
      setResult(response.data.result.results)
    })
  }
  return (
    <>
      <div className='container m-5'>
        <div>
          <input type='text' value={photo} onChange={(e) => { setPhoto(e.target.value) }} placeholder='Search any photo...' className='ring-black ring-1 px-5 border py-1' size={50} />
          <button onClick={changePhoto} className='ring ring-black rounded-sm bg-black py-1 text-white m-5 px-10'>Search</button>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8'>
          {result.map(item => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-100 lg:h-80">
                <img
                  alt=""
                  src={item.urls.regular}
                  className="h-full border rounded-md w-full object-cover object-center lg:h-full lg:w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App