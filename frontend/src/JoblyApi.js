import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('_token')

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(searchTerm) {
    let res = await this.request(`companies`, { search: searchTerm } );
    return res.companies;
  }

  static async getJobs(searchTerm) {
    let res = await this.request(`jobs`, { search: searchTerm } );
    return res.jobs;
  }

  static async getToken(userData) {
    let res = await this.request(`login`, userData, 'post' );
    return res;
  }

  static async getUser() {
    let username = localStorage.getItem('username');
    let res = await this.request(`users/${username}`);
    console.log(res)
    return res.user
  }

  // static async getToken() {
  //   let token = await axios({
  //     method: "post",
  //     url: `http://localhost:3001/login`
  //   }).data;
  //   console.log(token);
  //   return token;
  // }
}



export default JoblyApi;
