import { notFound } from "next/navigation";

export default async function singleBlogPage({ params }) {
  
  const { id } = await params;

  if (id !== '1' && id !== '2' && id !== '3') {
   notFound();
  }
  
  return (
    <div className='h-[60vh] flex items-center justify-center'>This is blog of id {id}</div>
  )
}

