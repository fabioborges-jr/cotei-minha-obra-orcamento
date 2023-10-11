'use client'
import ProjectButton from '../ProjectButton'
import NewProjectButton from '../NewProjectButton'
import { useEffect, useState } from 'react'

type UserProps = {
  user: {
    id: number
    email: string
    password: string | null
  }
}

type Project = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  userId: number
}

export default function ListProjects(props: UserProps) {
  const [listProject, setListProject] = useState([])
  useEffect(() => {
    getProjects()
  }, [])
  async function getProjects() {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/project`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const projects = await response.json()
    const listProjects = projects.map((project: Project) => {
      if (project.name.length === 0) {
        return (
          <NewProjectButton
            project={project}
            key={project.id}
            getProjects={getProjects}
          />
        )
      } else {
        return (
          <ProjectButton
            project={project}
            key={project.id}
            getProjects={getProjects}
          />
        )
      }
    })
    setListProject(listProjects)
  }

  return (
    <div className="flex place-content-around h-2/3 w-8/12">{listProject}</div>
  )
}
