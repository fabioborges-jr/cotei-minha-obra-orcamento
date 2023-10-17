'use client'

export default function Register() {
  return (
    <section className="flex h-screen w-screen bg-color1 items-center justify-center">
      <div className="bg-color2 h-3/12 w-2/12 flex flex-col">
        <h1 className="self-center mt-6">CRIE SUA CONTA</h1>
        <form
          className="grow flex flex-col mb-6 items-center justify-center m-3"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="w-full flex">
            <label>Email:</label>
            <input
              className="ml-3 w-full"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="mt-14 flex w-full">
            <label>Senha:</label>
            <input
              className="ml-3 w-full"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button
            className="mt-3 bg-color5 text-color1 px-4 py-2 self-end"
            type="submit"
          >
            OK
          </button>
        </form>
      </div>
    </section>
  )
}
