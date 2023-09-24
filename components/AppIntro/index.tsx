import Image from 'next/image'

export default async function AppIntro() {
  return (
    <div className="flex flex-col">
      <Image
        className="self-center"
        src="/cotei-logo.svg"
        alt="logo"
        width={82}
        height={65}
      ></Image>
      <h1 className="text-2xl text-color5">Bem-vindo (a)</h1>
      <p className="text-color5">
        Tome decisões informadas com dados confiáveis <br />
        <strong>(SINAPI, SETOP, ENTRE OUTRAS)</strong> e estimativas <br />
        precisas. Simplifique seu trabalho na construção.
      </p>
    </div>
  )
}
