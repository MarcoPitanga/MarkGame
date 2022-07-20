export const Card = ({ titulo, children, className }) => {
  return (
    <div
      className={`lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-7 flex flex-col md:ml-auto w-screen ${className}`}
    >
      <h2 className="text-orange-600 text-4xl font-medium title-font mb-4 text-center">{titulo}</h2>
      {children}
    </div>
  )
}
