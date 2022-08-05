import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'

export const Layout = ({ titulo, children, className }) => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center w-screen h-screen">
        <h1 className="text-orange-600 text-5xl">MarkGame</h1>
        <div
          className={`bg-gray-800 flex w-screen sm:w-2/3 md:h-4/5 mt-3 border border-orange-600 rounded-xl p-3 ${className}`}
        >
          <Menu />
          <div className="w-full ml-2 flex flex-col items-center">
            <h2 className="text-orange-600 text-2xl m-3">{titulo}</h2>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
