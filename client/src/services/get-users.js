export default async function getUsers({ page = 1, limit = 10 }) {
  const res = await fetch(
    `http://localhost:3000/v1/users?page=${page}&limit=${limit}`
  );
  return res.json();
}
