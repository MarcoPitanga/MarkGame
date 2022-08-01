import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '../components/MenuItem'
import { AuthContext } from '../contexts/auth'

export const Menu = () => {
  const { deslogar } = useContext(AuthContext)

  return (
    <div className="flex flex-col justify-between w-16 h-full border border-gray-900 rounded-xl bg-gray-900">
      <div>
        <div className="inline-flex items-center justify-center w-16 h-16">
          <svg className="block w-10 h-10 rounded-lg text-gray-900 bg-orange-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
            />
          </svg>
        </div>

        <div className="border-t border-orange-600">
          <nav className="flex flex-col p-2">
            <ul className="pt-4 space-y-1 flex flex-col items-center">
              <Link to={'/'}>
                <MenuItem>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22"
                    />
                  </svg>
                </MenuItem>
              </Link>

              <Link to={'/singleplayer'}>
                <MenuItem>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z"
                    />
                  </svg>
                </MenuItem>
              </Link>
              <Link to={'/multiplayer'}>
                <MenuItem>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"
                    />
                  </svg>
                </MenuItem>
              </Link>
              <Link to={'/ranking'}>
                <MenuItem>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14.94 19.5L12 17.77L9.06 19.5L9.84 16.16L7.25 13.92L10.66 13.63L12 10.5L13.34 13.63L16.75 13.92L14.16 16.16M20 2H4V4L8.86 7.64A8 8 0 1 0 15.14 7.64L20 4M18 15A6 6 0 1 1 10.82 9.12A5.86 5.86 0 0 1 13.18 9.12A6 6 0 0 1 18 15M12.63 7H11.37L7.37 4H16.71Z"
                    />
                  </svg>
                </MenuItem>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 p-2 border-t border-orange-600">
        <MenuItem onClick={deslogar}>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
            />
          </svg>
        </MenuItem>
      </div>
    </div>
  )
}
