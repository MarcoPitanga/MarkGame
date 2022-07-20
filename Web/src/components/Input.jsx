export const Input = ({ type, titulo, valor, onChange, className }) => {
  return (
    <div className="relative mb-4">
      <label className="leading-7 text-md text-gray-400">{titulo}</label>
      <input
        type={type}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      ></input>
    </div>
  )
}
