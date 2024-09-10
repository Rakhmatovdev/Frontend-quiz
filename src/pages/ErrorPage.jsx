//rrd imports

import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error=useRouteError()
    if(error.status ==404){
        return <div className="error-container container">
            <div>
<h3>
404 Error: Page not found. But don't worry, our developers are on a
            treasure hunt to recover it. Meanwhile, enjoy some virtual tea and
            biscuits!
</h3>
<Link to={"/"} className="btn">Go to home
</Link>
            </div>
        </div>
    }

  return (
    <h1>Something went wrong (:</h1>
  )
}

export default ErrorPage