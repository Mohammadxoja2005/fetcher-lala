import FetchLoader from './components/FetchLoader';
import axios from 'axios';

function App() {

  return (
    <>
      <FetchLoader
        Loader={() => (<>Loading...</>)}
      >
        {async () => {
          const list = await axios.get('https://jsonplaceholder.typicode.com/posts');

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

      <FetchLoader
        Loader={() => {
          return (
            <>
              Loading...
            </>
          )
        }}
      >
        {async () => {
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');
          await axios.get('https://jsonplaceholder.typicode.com/comments');

          return (
            <>Hello</>
          )
        }}
      </FetchLoader>

      <br />
      <>this is App.tsx</>
    </>
  )
}

export default App;
