import { Footer } from '../components/Footer'

export const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-300">
      {children}
      <Footer />
    </div>
  )
}
