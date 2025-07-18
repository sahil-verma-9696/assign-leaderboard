export default async function getUser({ userId }) {
  const res = await fetch(`http://localhost:3000/v1/users/${userId}`);
  return res.json();
}
