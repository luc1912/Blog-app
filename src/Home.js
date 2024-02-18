import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true); //simulating a delay in fetching data

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json(); //parse the json data into js object
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
        }, 1000)
     
    }, []); //only run when it renders for the first time

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All blogs" handleDelete = {handleDelete}/> }
        </div>
     );

    
}
 
export default Home; 