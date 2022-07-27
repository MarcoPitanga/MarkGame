export const Card = ({ children, className }) => {
  return (
    <section className="text-gray-300 flex justify-center w-full ">
      <div
        className={`w-full md:w-2/3 lg:w-2/4 xl:w-2/4 border-2 border-b-8 border-orange-600 rounded-lg overflow-hidden p-2 xl:p-4 ${className}`}
      >
        {children}
      </div>
    </section>
  )
}
