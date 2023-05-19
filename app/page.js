import BlogCard from "@/components/BlogCard";

const getPosts = async () => {
  const response = await fetch('https://dummyjson.com/posts?limit=6')
  return response.json()
}

export default async function Home() {
  let { posts } = await getPosts()
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Welcome Home Page</h1>
      <br />
      <p>Consequat laboris nisi ullamco commodo culpa duis nulla officia eiusmod voluptate aute anim cillum nisi. Cupidatat nostrud amet culpa occaecat nulla cillum laborum ullamco do occaecat excepteur voluptate exercitation esse.</p>
      <br />
      <hr />
      <br />
      {posts.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))
      }
    </>
  )
}