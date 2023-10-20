import { allBlogs } from "@/.contentlayer/generated"


export default function BlogPage({ params }) {
    
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

    return <div>Post: {params.slug}</div>
}