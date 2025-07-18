export default async function createUser(newUser) {
  const res = await fetch("http://localhost:3000/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newUser,
    }),
  });
  return res.json();
}
