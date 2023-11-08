// import { useState } from 'react'

import AddArticles from "./components/AddArticles"
import Articles from "./components/Articles"

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
        <section className="container">
            <div className="row">
                <div className="col-md-8">
                    <Articles />
                </div>
                <div className="col-md-4">
                    <AddArticles />
                </div>
            </div>
        </section>
    </>
  )
}

export default App
