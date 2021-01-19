import axios from 'axios';

const Task = {
    list:() => {
        return axios.get('/posts');
    },
    add: (payload) => {

        let data = Task.toFormData(payload);

        return axios.post('/tasks', data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },

    showOne: (id) => {
        return axios.get('/tasks/' + id);
    },
    edit: (payload, id) => {
        let data = Task.toFormData(payload);
        data.append('_method', 'PUT');

        return axios.post('/tasks/' + id, data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axios.delete('/tasks/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    toFormData: (payload) => {
        const formData = new FormData();

        for (let key in payload) {
            if(key != 'users') {
                formData.append(key, payload[key]);
            } else {
                for(let i=0; i<payload[key].length; i++) {
                    formData.append('users[]', payload[key][i]);
                }
            }
        }

        return formData;
    }
};

export default Post;