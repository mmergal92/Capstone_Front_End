import axios from 'axios';
const url = "https://proof-backend.herokuapp.com/inquiry"

class UserInquiry {
    static all (){
        return axios.get(url);
    }
    static addComment(obj){
        return axios.post(url, obj)
    }
}

export default UserInquiry;