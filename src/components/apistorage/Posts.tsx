import { motion } from "framer-motion"

export default function Posts({ posts }: any) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-stone-50 px-8 py-8">
      <h4 className="text-5xl font-bold text-center mb-6 text-stone-600">Posts</h4>
      {posts?.map((post: any) => (
        <ul className="flex gap-2 justify-center items-center w-2/3 m-auto py-2 border-t border-orange-200" key={post.id}>
          <span className="font-light text-orange-600">{post.id}: </span>
          <li className="capitalize" key={post.id}>{post.title}</li>
        </ul>
      ))}
    </motion.article>
  )
}