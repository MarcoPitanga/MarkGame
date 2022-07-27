export const MenuItem = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group flex justify-center w-10 px-2 py-1.5 text-orange-600 rounded hover:bg-gray-700 cursor-pointer"
    >
      {children}
    </button>
  )
}
