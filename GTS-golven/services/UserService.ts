import FetchService from "./FetchService";

class UserService extends FetchService {
  constructor() {
    super("auth/user/");
  }
}

export default UserService;
