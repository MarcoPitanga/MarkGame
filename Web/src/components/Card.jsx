export const Card = ({ titulo, children, className }) => {
  return (
    <div
      className={`lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-screen mt-10 md:mt-0 ${className}`}
    >
      <h2 className="text-white text-2xl font-medium title-font mb-5">{titulo}</h2>
      {children}
    </div>
  )
}
