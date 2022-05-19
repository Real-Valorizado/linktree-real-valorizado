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
    site: 'Site Principal',
    url: 'https://realvalorizado.com.br/',
  },
]

const social = [

  {
    name: 'Facebook',
    href: 'https://www.facebook.com/realvalorizado/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/realvalorizado/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@realvalorizado/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/realvalorizado/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/real-valorizado/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
          clipRule="evenodd"
        />
      </svg>
    ),
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
                    className="relative rounded-full border border-gray-300 bg-gradient-to-tr from-blue-700 to-indigo-700 px-6 py-5 shadow-sm flex items-center space-x-3 hover:from-indigo-600 hover:to-blue-600 hover:shadow-blue-400/40 hover:shadow-lg"
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
            <div className="mt-8 flex justify-center space-x-6">
              {social.map((socialico) => (
                <a key={socialico.name} href={socialico.href} className="text-blue-100 hover:text-blue-900">
                  <span className="sr-only">{socialico.name}</span>
                  <socialico.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-8 text-base text-gray-100 ">&copy; Real Valorizado, Inc. Todos os direitos reservados.</div>
          </div>
        </footer>
      </div >
    </div >
  )
}

export default Home
