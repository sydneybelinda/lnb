import axios from "axios";

import Config from "./config";

export default axios.create({
  baseURL: Config.url,
  headers: {
    "Content-type": "application/json"
  }
});