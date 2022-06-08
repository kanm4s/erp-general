import { io } from "socket.io-client";
import { getAccessToken } from "../service/localStorage";

const token = getAccessToken();

export default io.connect("http://localhost:8003", {
  query: { token },
});
