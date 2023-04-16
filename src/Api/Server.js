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
    return await this.getCrypto("coins/?per_page=10");
  }

  static async getChart(crypto) {
    return await this.getCrypto(`coins/${crypto}/market_chart?vs_currency=usd&days=30`)
  }

  static async getFavoriteCoin() {
    return await this.getCrypto('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en')
  }
}
