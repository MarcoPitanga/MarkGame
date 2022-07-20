/* import { Link } from 'react-router-dom'
 */
export const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block text-sm font-medium text-orange-600 group focus:outline-none focus:ring ${className}`}
    >
      <span className="absolute inset-0 transition-transform translate-x-1 translate-y-0.5 rounded-lg bg-orange-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block px-8 py-3 bg-[#1A2238] border rounded-md border-current text-center text-lg ">
        <span className="text-gray-200">{text}</span>
      </span>
    </button>
  )
}
