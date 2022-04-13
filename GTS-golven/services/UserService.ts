import FetchService from "./FetchService";
import AuthService from "./AuthService";

class UserService extends FetchService {
  constructor() {
    super("auth/user/");
  }

  public async register(data: any){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const token = AuthService.GetToken();

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    var baseUrl = "http://morenoblyat.sjekmaster.nl:6737/api";

    return fetch(`${baseUrl}/${this.url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return console.log(error);
      });
  } 
}

export default UserService;
