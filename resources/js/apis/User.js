import axios from "axios";

const User = {
    add: (payload, successCb, failCb) => {
        axios
            .post("/users", payload, {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("user.api_token")
                }
            })
            .then(response => {
                successCb(response);
            })
            .catch(err => {
                failCb(err);
            });
    }
};

export default User;
