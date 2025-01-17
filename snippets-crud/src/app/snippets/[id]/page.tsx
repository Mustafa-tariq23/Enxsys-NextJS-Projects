import { notFound} from "next/navigation";
import Link from "next/link";
import { db } from "@/db"
import * as actions from "@/actions"

interface ShowPageProps {
  params: {
    id: string;
  }
}
export default async function ShowSnippets(props: ShowPageProps) {
  const id = parseInt(props.params.id)
  if (!id) notFound()
  if (isNaN(id)) {
    throw new Error('Invalid ID')
  }
  const snippet = await db.snippet.findFirst({
    where: { id }
  })
  if (!snippet) notFound()

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)

  return (
    <div>
      <Link href="/" className="border p-2 rounded">Back</Link>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
          <form action={deleteSnippetAction}><button className="p-2 border rounded">Delete</button></form>
        </div>
      </div>
      

      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        <code>
          {snippet?.code}  
        </code>
      </pre>
    </div>
  )
}