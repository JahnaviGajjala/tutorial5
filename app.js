const express = require("express");
const crypto = require("crypto");
const app = express();
app.use(express.json());

const port = 3000;

let usersData = new Map([
  ["5abf6783", { email: "abc@abc.ca", firstName: "ABC", id: "5abf6783" }],
  ["5abf674563", { email: "xyz@xyz.ca", firstName: "XYZ", id: "5abf674563" }],
]);

function randomIdGenerator() {
  return crypto.randomBytes(10).toString("hex").substring(0, 10);
}

app.get("/users", async (req, res) => {
  res.json({
    message: "Users retrieved",
    success: true,
    users: Array.from(usersData.values()),
  });
});

app.post("/add", async (req, res) => {
  const { email, firstName } = req.body;
  const newUser = {
    email,
    firstName,
    id: randomIdGenerator(),
  };
  usersData.set(newUser.id, newUser);
  res.status(201).json({
    message: "User added",
    success: true,
  });
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const user = usersData.get(id);
  if (user == undefined) {
    return res.status(404).json({ message: "User not found", success: false });
  }
  const { email, firstName } = req.body;
  user.email = email || user.email;
  user.firstName = firstName || user.firstName;
  res.json({
    message: "User updated",
    success: true,
  });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = usersData.get(id);
  if (!user) {
    return res.status(404).json({ message: "User not found", success: false });
  }
  res.json({
    success: true,
    user,
  });
});

app.listen(port, () => console.log(`Port Number: ${port}`));
