import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'
import UserProfile from './user'

const Repos = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])

  const Repositories = (props) => {
    return (
      <div
        key={props}
        className="bg-gray-200 text-left mx-20 mt-2 text-gray-900 border border-gray-900 p-2 hover:bg-gray-100 "
      >
        <Link to={`/${userName}/${props.name}`}>
          {props.name}
          <div>README.md</div>
        </Link>
      </div>
    )
  }

  useEffect(async () => {
    await axios
      .get(`http://api.github.com/users/${userName}/repos`)
      .then((item) => setRepos(item.data))
      .catch(() => setRepos(false))
    return () => {}
  }, [userName])

  return (
    <div>
      <Head title="Hello" />
      <Header />
      {repos ? <UserProfile /> : <div/>}
      <div>
        {repos ? (
          repos.map((rep) => {
            return <Repositories key={rep} {...rep} />
          })
        ) : (
          <div className="bg-gray-300 text-center mx-auto p-2 mt-3">there is no such user</div>
        )}
      </div>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
