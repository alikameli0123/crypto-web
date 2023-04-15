import axios from "axios";

export default class Server {
  static base_url = "https://apingweb.com/api";
  static coingecko_url = 'https://api.coingecko.com/api/v3/';

  static async get(subdirectoy) {
    const res = await axios.get(this.base_url + subdirectoy);
    return res.data;
  }

  static async getCrypto(subdirectoy) {
    const res = await axios.get(this.coingecko_url + subdirectoy);
    return res.data;
  }


  static async register(name, email, phone, password, password_confirmation) {
    return await axios.post(`${this.base_url}/register`, {
      name, email, phone, password, password_confirmation
    }, {
      'Content-Type': 'application/json'
    });
  }

  static async login(email, password) {
    return await axios.post(`${this.base_url}/login`, {
      email, password
    })
  }

  static async getCoinsList() {
    return await this.getCrypto("coins/");
  }
  
  static async getChart(crypto){
    return await this.getCrypto(`coins/${crypto}/market_chart?vs_currency=usd&days=30`)
  }
}
