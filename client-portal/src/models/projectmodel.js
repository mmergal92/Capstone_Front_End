import axios from 'axios';
const url = "https://proof-backend.herokuapp.com/projects"

class UserProjects {
    static all (){
        return axios.get(url);
    }
    static addProject(obj){
        return axios.post(url, obj)
    }
}

export default UserProjects;