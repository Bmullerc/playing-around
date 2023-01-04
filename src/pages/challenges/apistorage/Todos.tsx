export default function Todos({ todos }: any) {
  return (
    <article className="bg-stone-50 px-8 py-8">
      <h4 className="text-5xl font-bold text-center mb-6 text-stone-600">Todos</h4>
      {todos?.map((todo: any) => (
        <ul key={todo.id} className="flex gap-2 justify-between border-b border-orange-200 even:bg-gradient-to-b from-orange-50 to-orange-100 w-2/3 m-auto px-3 py-1">
          <span className="font-light text-orange-600">{todo.id}: </span>
          <li className="capitalize flex" >{todo.title}</li>
          <input
            className="ml-2 h-5 w-5 accent-orange-200 self-center cursor-not-allowed"
            type="checkbox"
            checked={todo.completed}
            readOnly
          />
        </ul>
      ))}
    </article>
  )
}