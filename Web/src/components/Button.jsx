export const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${className}`}
    >
      {text}
    </button>
  )
}
