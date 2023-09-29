import prisma from '@/lib/db'

type UserProps = {
  user: {
    id: number
    email: string
    password: string | null
  }
}

export default async function ListProjects(props: UserProps) {
  const projects = await prisma.project.findMany({
    where: { email: props.userEmail },
  })
  return <h1>Hello World</h1>
}
