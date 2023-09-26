import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const user = {
  id: '1321321',
  name: 'authname',
  email: 'asdasda@gmail.com',
  projects,
}

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

const projects = [project1, project1, project1]

const listProjects = projects.map((project) =>
  typeof project.name !== 'undefined' ? (
    <button
      className="bg-color2 h-3/5 w-1/6 rounded-sm flex justify-center items-center"
      key={project.id}
    >
      {project.name}
    </button>
  ) : (
    <button key={project.id}>Crie um novo projeto</button>
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
      <main className="bg-color1 h-screen flex place-content-around items-center">
        {listProjects}
      </main>
    )
  }
}
