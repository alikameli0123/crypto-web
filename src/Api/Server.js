import axios from "axios";

export default class Server {
    static base_url = "https://apingweb.com/api";

    static async get(subdirectoy) {
        const res = await axios.get(this.base_url + subdirectoy);
        return res.data;
    }

    static async register(name, email, phone, password, password_confirmation) {
        return await axios.post(`${this.base_url}/register`, {
            name, email, phone, password, password_confirmation
        }, {
            'Content-Type': 'application/json'
        });
    }
}
