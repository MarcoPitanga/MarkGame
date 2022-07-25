export const Card = ({ children }) => {
  return (
    <section className="text-gray-300 flex justify-center w-full h-full ">
      <div className="p-4 w-full md:w-2/3 lg:w-2/4 xl:w-2/4">
        <div className="h-full border-2 border-b-8 border-orange-600 rounded-lg overflow-hidden">
          <div className="p-2 xl:p-4">{children}</div>
        </div>
      </div>
    </section>
  )
}
