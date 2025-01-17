import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link href={`/snippets/${snippet.id}`} key={snippet.id} className="flex items-center justify-between p-2 border rounded">
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
      // <div className="text-white">
      //   <div key={snippet.id} className="bg-black p-4 rounded-md w-96 h-fit">
      //     <h1 className="text-5xl">{snippet.title}</h1>
      //     <pre className="p-4 bg-gray-600 rounded-md">{snippet.code}</pre>
      //   </div>
      // </div>
    )
  })

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <h1 className="text-4xl font-bold text-gray-600">Snippets</h1>
        <Link href={"/snippets/new"} className="border p-2 rounded-md">New</Link>
      </div>
      <div className="flex gap-2 flex-col ">
        {renderedSnippets}
      </div>
    </>
  );
}
