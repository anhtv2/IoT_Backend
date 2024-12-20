import { addUser } from "../data/users";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "../constants/saltRound";

(async () => {
  const username = process.env.userSample;
  const passwordRaw = process.env.passSample;
  const email = `iamkstn@gmail.com`;
  const phone = "0987654321";
  const name = "Nhom 3";
  const topic = "abc";
  const password = bcrypt.hashSync(passwordRaw, SALT_ROUND);
  return addUser({
    username,
    password,
    email: email.replace(".", "-"),
    phone,
    name,
    topic
  });
})();
