import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import Header from './header'

const buttonClass =
  'text-gray-900 border-2 border-gray-100 hover:border-gray-900 px-5 py-1 hover:bg-gray-100 ml-3 mb-3'

const Repository = () => {
  const { userName, repositoryName } = useParams()
  const [readMe, setReadme] = useState('')
  const [languages, setLang] = useState('')

  useEffect(async () => {
    await axios
      .get(`http://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((rep) => setReadme(rep.data))
      .catch(() => setReadme(`README.md does not exist in ${repositoryName}`))
    axios
      .get(`https://api.github.com/repos/${userName}/${repositoryName}/languages`)
      .then((lan) => setLang(Object.keys(lan.data)))
      .catch(() => setLang('No language'))
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div className="bg-gray-200 text-center text-gray">{`This repository is written in: ${languages}`}</div>
      <div className="bg-gray-200 m-3 border border-gray-900 px-10 py-5">
        <Markdown>{readMe}</Markdown>
      </div>
      <button type="button" className={buttonClass}>
        <a
          href={`http://github.com/${userName}/${repositoryName}`}
          rel="noreferrer"
          target="_blank"
        >
          open on GitHub
        </a>
      </button>
    </div>
  )
}

Repository.propTypes = {}

export default React.memo(Repository)
