import axios from "axios";

const getData = async (id) => {
    const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    user.post = post;
    return user;
}

export default getData;