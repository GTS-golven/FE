import FetchService from "./FetchService";
import AuthService from "./AuthService";

class UserService extends FetchService {
  constructor() {
    super("auth/user/");
  }

  public async register(data: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    var baseUrl = "http://morenoblyat.sjekmaster.nl:6737/api/auth/register/";

    return fetch(`${baseUrl}`, {
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
