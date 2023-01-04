export default function Albums({ albums }: any) {
  return (
    <article className="bg-stone-50 px-8 py-8 text-center">
      <h4 className="text-5xl font-bold text-center mb-6 text-stone-600">Albums</h4>
      {albums?.map((album: any) => (
        <div className="capitalize border-b border-orange-200 odd:bg-gradient-to-b from-orange-50 to-orange-100 py-1 w-2/3 m-auto" key={album.id}><span className="font-light text-orange-600">{album.id}: </span>{album.title}</div>
      ))}
    </article>
  )
}