import FetchService from "./FetchService";

class UserService extends FetchService {
  constructor() {
    super("auth/register/");
  }
}

export default UserService;
