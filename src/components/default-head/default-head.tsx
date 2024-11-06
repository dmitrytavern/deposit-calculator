import Head from 'next/head'

export const DefaultHead = () => {
  return (
    <Head>
      <title>Депозитний калькулятор</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="application-name" content="Депозитний калькулятор" />
      <meta
        name="description"
        content="Депозитний калькулятор, який допоможе розрахувати ваш депозит з урахуванням щомісячних поповнень, податків і капіталізації."
      ></meta>
      <meta
        name="keywords"
        content="депозит, калькулятор, депозитний калькулятор"
      ></meta>
      <meta property="og:title" content="Депозитний калькулятор"></meta>
      <meta
        property="og:description"
        content="Депозитний калькулятор, який допоможе розрахувати ваш депозит з урахуванням щомісячних поповнень, податків і капіталізації."
      ></meta>
      <meta name="twitter:title" content="Депозитний калькулятор"></meta>
      <meta
        name="twitter:description"
        content="Депозитний калькулятор, який допоможе розрахувати ваш депозит з урахуванням щомісячних поповнень, податків і капіталізації."
      ></meta>
      <link
        rel="icon"
        type="image/png"
        href="/deposit-calculator/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/deposit-calculator/favicon.svg"
      />
      <link rel="shortcut icon" href="/deposit-calculator/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/deposit-calculator/apple-touch-icon.png"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Депозитний калькулятор"
      />
      <link rel="manifest" href="/deposit-calculator/site.webmanifest" />
    </Head>
  )
}
