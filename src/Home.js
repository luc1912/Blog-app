import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState(
        [
            {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
            {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
            {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
        ]
    )

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    }, [blogs]); //only run when blogs change
    // if the array was empty, it would only run once when the component is first rendered

    return ( 
        <div className="home">
          <BlogList blogs = {blogs} title = "All blogs" handleDelete = {handleDelete}/>
        </div>
     );

    
}
 
export default Home;