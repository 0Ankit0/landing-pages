import Layout from "../Layout";
import Navbar from "../Components/Navbar";
import Link from "next/link";

function Users() {
  const Users = [
    {
      Name: "Roshan Bhattarai",
      Address: "Birauta",
      Sem: "VI",
    },
    {
      Name: "Sajit Gurung",
      Address: "Bhedifarm",
      Sem: "VI",
    },
    {
      Name: "Ankit Poudyal",
      Address: "Mustang chowk",
      Sem: "VI",
    },
  ];
  return (
    <Layout>
      <Navbar>
        <nav className="navbar">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/Login-form/" className="nav-link">
            Sign-in
          </Link>
        </nav>
      </Navbar>
      <table className="shadow-lg bg-white border-collapse m-auto my-48">
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Address</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Semester</th>
        </tr>
        {Users.map((user, userIndex) => (
          <tr
            className="hover:bg-gray-100 focus:bg-gray-300 active:bg-gray-300"
            key={userIndex}
          >
            <td className="border px-8 py-4">{user.Name}</td>
            <td className="border px-8 py-4">{user.Address}</td>
            <td className="border px-8 py-4">{user.Sem}</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
}

export default Users;
