import AuthService from "./AuthService";

class FetchService {
  private baseUrl: string;
  public url: string;
  public User: any;

  constructor(url: string) {
    this.baseUrl = "http://morenoblyat.sjekmaster.nl:6737/api";
    if (url.endsWith("/")) {
      this.url = url;
    } else {
      this.url = url + "/";
    }
  }

  public async get() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const token = AuthService.GetToken();

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(`${this.baseUrl}/${this.url}`, {
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return console.log(error);
      });
  }

  public async post(data: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const token = AuthService.GetToken();

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(`${this.baseUrl}/${this.url}`, {
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

  public async put(data: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const token = AuthService.GetToken();

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(`${this.baseUrl}/${this.url}`, {
      method: "PUT",
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

  public async patch(data: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const token = AuthService.GetToken();

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(`${this.baseUrl}/${this.url}`, {
      method: "PATCH",
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

  public async delete(id: number) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const token = AuthService.GetToken();

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(`${this.baseUrl}/${this.url}/${id}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return console.log(error);
      });
  }
}

export default FetchService;
