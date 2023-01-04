export default function Posts({ posts }: any) {
  return (
    <article className="bg-stone-50 px-8 py-8">
      <h4 className="text-5xl font-bold text-center mb-6 text-stone-600">Posts</h4>
      {posts?.map((post: any) => (
        <div className="capitalize" key={post.id}><span className="font-light text-orange-600">{post.id}: </span>{post.title}</div>
      ))}
    </article>
  )
}