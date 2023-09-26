import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const project1 = {
  id: '1',
  name: 'Nome do projeto',
  createdAt: '22-02-2023',
  editedAt: '15-10-2023',
  codes: [223554, 445642, 312564, 516513],
  subGroups: [
    'Serviços preliminares',
    'Administrativo',
    'Fundações',
    'Pilares',
  ],
}

const projects = new Array(3)
projects[1] = project1
console.log(projects[2])

const listProjects = projects.map((project) =>
  typeof project.name !== 'undefined' ? (
    <h1 key={project.id}>{project.name}</h1>
  ) : (
    <h1 key={project.id}>Crie um novo projeto</h1>
  ),
)

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (
      <main className="border-red-600 border-2 h-screen flex">
        <section className="flex justify-center items-center w-1/2 bg-color1">
          <AppIntro />
        </section>
        <section className="flex justify-center items-center w-1/2 bg-color2">
          <Login />
        </section>
      </main>
    )
  }
  if (session) {
    return (
      <main className="bg-color1 h-screen">
        <button className="bg-color2 h-3/5 w-1/4 rounded-sm">
          {listProjects}
        </button>
      </main>
    )
  }
}
