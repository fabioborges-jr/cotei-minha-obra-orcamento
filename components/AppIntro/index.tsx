import Image from 'next/image'

export default async function AppIntro() {
  return (
    <section>
      <div>
        <Image src="/cotei-logo.svg" alt="logo" width={82} height={65}></Image>
        <h1>Bem-vindo (a)</h1>
        <p>
          Tome decisões informadas com dados confiáveis <br />
          <strong>(SINAPI, SETOP, ENTRE OUTRAS)</strong> e estimativas <br />
          precisas. Simplifique seu trabalho na construção.
        </p>
      </div>
    </section>
  )
}
