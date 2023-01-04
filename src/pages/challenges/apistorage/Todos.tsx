export default function Todos({ todos }: any) {
  return (
    <article className="bg-stone-50 px-8 py-8">
      <h4 className="text-5xl font-bold text-center mb-6 text-stone-600">Todos</h4>
      {todos?.map((todo: any) => (
        <div className="capitalize" key={todo.id}><span className="font-light text-orange-600">{todo.id}: </span>{todo.title}</div>
      ))}
    </article>
  )
}