import React from "react"
import axios from 'axios'

function App() {
  return (
    <>
      {/* <FetchLoader
        Loader={() => (<>Loading...</>)}
      >
        {async () => {
          const list = await axios.get('https://jsonplaceholder.typicode.com/posts')

          return (
            <>
              {
                list.data.slice(0, 10).map((value: any) => {
                  return (
                    <div>
                      hello world
                    </div>
                  )
                })
              }
            </>
          )
        }}
      </FetchLoader> */}
      {/* <FetchLoader>

      </FetchLoader> */}
      <>this is App.tsx</>
    </>
  )
}

export default App;
