import React from "react"
import axios from 'axios' 
import {FetchLoader} from "./components";
import { Async } from "react-declarative";

function App() {
  return (
    <>
      <FetchLoader
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
      </FetchLoader>
      <>this is App.tsx</>
    </>
  )
}

export default App;
