import bcrypt from "bcryptjs";

const users = [
  {
    name: "Seller",
    email: "seller@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sourya Gupta",
    email: "sourya@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
