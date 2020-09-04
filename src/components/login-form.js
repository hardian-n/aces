import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ errorMessage, onSubmit }) => (
  <div className="w-full">
    {/* <div className="bg-white h-16" /> */}
    <div className="w-full max-w-xs mx-auto py-16">
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input type="text" id="username" name="username" required autocomplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500" />
        </div>
        <div className="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input type="password" id="password" name="password" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500" />
        </div>
        {errorMessage && <p className="text-red-500 my-3">{errorMessage}</p>}
        <div className="flex items-center justify-between">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="#">
            Forgot Password?
          </a>
        </div>

      </form>
      </div>
    </div>
)

export default Form

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
