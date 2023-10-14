export default function Register() {
  return (
    <section className="flex h-screen w-screen bg-color1 items-center justify-center">
      <div className="bg-color2 h-2/6 w-2/12 flex flex-col items-center justify-center roude">
        <h1 className="">CRIE SUA CONTA</h1>
        <div>
          <label>Email:</label>
          <input className="ml-3" type="email" id="email" name="email" />
        </div>
        <div className="mt-16">
          <label>Senha:</label>
          <input
            className="ml-3"
            type="password"
            id="password"
            name="password"
          />
        </div>
      </div>
    </section>
  )
}
