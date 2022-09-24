import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userName } = useParams()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    axios.get(`http://api.github.com/users/${userName}`).then((item) => setUserData(item.data))
    return () => {}
  }, [userName])

  const { name, id, blog, twitter_username, location } = userData

  return (
    <div className="flex bg-gray-200 w-[340px] h-44 mt-4 ml-20 mr-20 border border-gray-900">
      <img
        className="w-16 h-16 rounded-full m-4"
        src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
        alt="avatar"
      />
      <ul className="mt-3 ml-2">
        <li>{`name: ${name}`}</li>
        <li>{`blog: ${blog ? `${blog}` : '-'}`}</li>
        <li>{`twitter: ${twitter_username ? `${twitter_username}` : '-'}`}</li>
        <li>{`location: ${location ? `${location}` : '-'}`}</li>
        <li>
          <button
            type="button"
            className="bg-gray-200 border border-gray-900 px-5 py-1 mt-2 hover:bg-gray-100 text-gray-900"
          >
            <a
              className="text-center"
              href={`http://github.com/${userName}`}
              rel="noreferrer"
              target="_blank"
            >
              go to GitHub
            </a>
          </button>
        </li>
      </ul>
    </div>
  )
}

UserProfile.PropsType = {}

export default React.memo(UserProfile)
