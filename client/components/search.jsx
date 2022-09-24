import React, { useState } from 'react'
import Head from './head'
import { history } from '../redux'
import Header from './header'
import './css/styles.css'

const Search = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const goToRepo = (e) => {
    return e.keyCode === 13 ? history.push(`/${value}`) : false
  }

  return (
    <div>
      <Head title="Search Page" />
      <Header />
      <div className="bg-blue-300 w-[400px] mt-4 rounded-xl mx-auto text-center pt-6 h-40">
        <div>
          <h1 className="font-semibold text-xl text-gray-700">INSERT USERNAME</h1>
          <input
            className="w-[250px] text-lg border-2 hover:border-gray-500 px-2"
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={goToRepo}
          />
          <div>
            <button
              className="bg-gray-500 hover:text-green-800 border border-white px-8 py-1 mt-2 hover:bg-orange-300 text-white shadow-lg rounded-sm"
              type="button"
              onClick={() => history.push(`/${value}`)}
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {}

export default React.memo(Search)
