import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-slate-800 text-white min-h-[100vh] top-0 left-0 h-full w-full flex flex-col overflow-auto'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
