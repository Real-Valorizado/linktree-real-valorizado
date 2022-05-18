import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



const tree = [
  {
    site: 'Notícias',
    url: 'https://realvalorizado.com.br/noticias/',
  },
  {
    site: 'Ferramentas',
    url: 'https://ferramentas.realvalorizado.com.br/',
  },
  {
    site: 'Ebooks',
    url: 'https://realvalorizado.com.br/ebooks/',
  },
  {
    site: 'Instagram',
    url: 'https://www.instagram.com/realvalorizado/',
  },
  {
    site: 'Facebook',
    url: 'https://www.facebook.com/realvalorizado/',
  },
  {
    site: 'TikTok',
    url: 'https://www.tiktok.com/@realvalorizado/',
  },
  {
    site: 'LinkedIn',
    url: 'https://www.linkedin.com/company/real-valorizado/',
  },
  {
    site: 'Twitter',
    url: 'https://twitter.com/realvalorizado/',
  },
  {
    site: 'Site Principal',
    url: 'https://realvalorizado.com.br/',
  },
]




const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Real Valorizado</title>
        <meta name="description" content="Links de acesso" />
        <link rel="icon" href="/favicon.png" />

        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-PFLF854');`}}>
        </script>

        <meta name="facebook-domain-verification" content="0xzp6fw909wv5qu3h0392gry9ak4a4" />
      </Head>

      <div className="bg-gradient-to-r from-indigo-700 to-blue-700">
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFLF854"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}>
          </noscript>

          <div className="flex-shrink-0 pt-16">
            <div className="text-center h-12 w-auto">
              <Image
                src="/real-valorizado-logo.png"
                width="232"
                height="75"
                alt="Real Valorizado"
              />
            </div>
          </div>
          <div className="max-w-xl mx-auto py-16 sm:py-24">
            <div className="text-center">
              <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                Seu dinheiro valorizado
              </h1>
              <p className="mt-2 text-lg text-blue-200">Educação financeira e Criptomoedas</p>
            </div>
            <div className="mt-12">

              <div className="grid grid-cols-1 gap-4">
                {tree.map((item) => (
                  <div
                    key={item.site}
                    className="relative rounded-full border border-gray-300 bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-5 shadow-sm flex items-center space-x-3 hover:from-indigo-600 hover:to-blue-600 hover:shadow-blue-400/40 hover:shadow-lg"
                  >

                    <div className="flex-1 min-w-0 text-center">
                      <Link href={item.url}>
                        <a>
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="text-xl font-medium text-white">{item.site}</div>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </main>
        <footer className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-12 text-center">
            <div className="text-base text-gray-100 ">&copy; Real Valorizado, Inc. Todos os direitos reservados.</div>

          </div>
        </footer>
      </div >
    </div >
  )
}

export default Home
