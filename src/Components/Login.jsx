import React from 'react'


const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg- bg-white px-4'>
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8  border-black">
<h2 className='text-2xl font-semibold text-center text-cyan-900 mb-2'>Sign in to Munchmate</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Welcome back! Please enter your details</p>

      <label className='block text-gray-700 text-sm font-medium mb-1'>Email address</label>
      <input type="text" className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4' placeholder='Email address'/>
      <label className='block text-gray-700 text-sm font-medium mb-1'>Password</label>
      <input type="text" className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4' placeholder='••••••••'/>
      <button className='w-full bg-cyan-800 hover:bg-cyan-700 text-white py-2 rounded-lg font-medium transition duration-300 mb-3'>Login</button>
      <p className='text-center text-gray-500 my-2'>or</p>
      <button className='w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center'>
        <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google" 
            className="w-5 h-5 mr-2"
          />Conitnue with Google</button>
      </div>
      
  </div>
  )
}

export default Login