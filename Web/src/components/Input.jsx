export const Input = ({ type, titulo, valor, onChange, className }) => {
  return (
    <div className="relative mb-4">
      <label htmlFor={titulo} className="leading-7 text-md text-gray-200">
        {titulo}
      </label>
      <input
        id={titulo}
        type={type}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#1A2238] bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-900 rounded border border-orange-700 focus:border-orange-600 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      ></input>
    </div>
  )
}
