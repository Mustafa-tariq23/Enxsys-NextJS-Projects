import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='absolute w-full text-white z-10 p-12'>
        <nav className='container relative flex flex-wrap items-center justify-between'>
            <Link href={"/"}>Cloud Corp</Link>
          <div className="flex items-center justify-between w-fit space-x-4 p-0">
            <Link href="/performance">Performance</Link>
            <Link href={"/reliability"}>reliability</Link>
            <Link href={"/scale"}>Scale</Link>
          </div>
        </nav>
      </section>
    </>
  );
}