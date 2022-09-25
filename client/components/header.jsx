import React from 'react'
import { useParams, Link } from 'react-router-dom'

const buttonClass =
  'bg-white text-gray-900 border border-white hover:border-gray-900 px-5 py-1 mt-2 hover:bg-gray-100 ml-1'
const invisible = 'invisible'

const Header = () => {
  const { userName, repositoryName } = useParams()

  return (
    <div className="bg-white text-black py-3 text-center empty:invisible">
      <h1>
        <Link className={buttonClass} to="/">
          HOME
        </Link>
        <Link className={userName ? buttonClass : invisible} to={`/${userName}`}>
          {userName ? userName.toUpperCase() : userName}
        </Link>
        <Link
          className={repositoryName ? buttonClass : invisible}
          to={`/${userName}/${repositoryName}`}
        >
          {repositoryName}
        </Link>
      </h1>
    </div>
  )
}

Header.PropsType = {}

export default React.memo(Header)
