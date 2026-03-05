// "use client"
// import { useParams } from "next/navigation"

// export default function Username() {
//   const router = useParams()
//   console.log(router)
//   return <h1>Username: {router.username}</h1>
// }

export default async function Username({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params

  return <h1>Username: {username}</h1>
}
