 import { VISION, MISSION, ABOUT_US, VALUES } from "../utils/constants" 
const About =()=>{
  return (
<div className="container max-w-4xl mx-auto px-4 py-10">
  <h1 className="text-4xl font-bold text-cyan-900 mb-6 text-center">About Us</h1>
  <p className="text-gray-700 text-lg mb-8 leading-relaxed text-center">{ABOUT_US}</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-cyan-800 mb-2 text-center">🎯 Mission</h3>
      <p className="text-gray-600 text-center">{MISSION}</p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-cyan-800 mb-2 text-center">🔭 Vision</h3>
      <p className="text-gray-600 text-center">{VISION}</p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-cyan-800 mb-2 text-center">💎 Values</h3>
      <p className="text-gray-600 text-center">{VALUES}</p>
    </div>
  </div>
</div>

 
  )
}

export default About