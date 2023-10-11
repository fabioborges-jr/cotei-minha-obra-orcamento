'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiFillSetting } from 'react-icons/ai'
import { BiArrowBack, BiLogOut } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'

export default function NavProject() {
  const session = useSession()
  console.log(session)
  return (
    <nav className="self-start flex w-full">
      <Link href="/" className="mr-3">
        <BiArrowBack size={24} />
      </Link>
      <button className="mr-3">
        <AiFillSetting size={24} />
      </button>
      <button>
        <BsSearch size={24} />
      </button>
      <button className="ml-auto mr-5" onClick={() => signOut()}>
        <BiLogOut size={32} />
      </button>
    </nav>
  )
}
