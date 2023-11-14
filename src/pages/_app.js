import Header from '@/templates/header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <style jsx global>{`
        body {
          background: #323;
        }
        * {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
        }
    `}</style>
      <Component {...pageProps} />
    </>
  )
}
