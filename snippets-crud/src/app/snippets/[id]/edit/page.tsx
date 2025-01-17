import { db } from "@/db"
import { notFound } from "next/navigation"
import SnippetEditForm from "@/components/client/snippet-edit-form";
interface snippetEditPageProps {
  params: {
    id: string;
  }
}
export default async function edit( props: snippetEditPageProps ){
  const id = parseInt(props.params?.id)
  if (!id) notFound()
  if (isNaN(id)) {
    throw new Error('Invalid ID')
  }

  const snippet = await db.snippet.findFirst({
    where: { id: id }
  })
 
  return (
    <div>
      <SnippetEditForm snippet={snippet}/>
    </div>
  )
}