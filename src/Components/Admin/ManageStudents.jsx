import React, { useState } from "react";

function ManageStudents() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Karthik Raja",
      regNo: "BCA001",
      department: "BCA",
      year: "III",
      email: "karthik@gmail.com",
    },
    {
      id: 2,
      name: "Priya",
      regNo: "BCA002",
      department: "BCA",
      year: "II",
      email: "priya@gmail.com",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    regNo: "",
    department: "",
    year: "",
    email: "",
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.regNo ||
      !form.department ||
      !form.year ||
      !form.email
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId ? { ...student, ...form } : student
        )
      );
      alert("Student Updated Successfully!");
      setEditId(null);
    } else {
      setStudents([...students, { id: Date.now(), ...form }]);
      alert("Student Added Successfully!");
    }

    setForm({
      name: "",
      regNo: "",
      department: "",
      year: "",
      email: "",
    });
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.regNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#F1F5F9;
        }

        /* Space for Navbar & Sidebar */
        .manage-students{
          margin-top:70px;
          margin-left:250px;
          padding:30px;
          min-height:100vh;
          background:#F1F5F9;
          transition:0.3s ease;
        }

        .title{
          color:#2563EB;
          margin-bottom:20px;
          font-size:30px;
          font-weight:bold;
        }

        .search{
          width:100%;
          padding:12px;
          border:1px solid #CBD5E1;
          border-radius:10px;
          margin-bottom:20px;
          font-size:15px;
        }

        .form{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:15px;
          margin-bottom:25px;
          background:#fff;
          padding:20px;
          border-radius:15px;
          box-shadow:0 4px 10px rgba(0,0,0,0.08);
        }

        .input{
          padding:12px;
          border:1px solid #CBD5E1;
          border-radius:8px;
          font-size:14px;
          outline:none;
        }

        .input:focus{
          border-color:#2563EB;
        }

        .add-btn{
          background:#2563EB;
          color:#fff;
          border:none;
          border-radius:8px;
          padding:12px;
          cursor:pointer;
          font-weight:bold;
          transition:0.3s;
        }

        .add-btn:hover{
          background:#1D4ED8;
        }

        .table-box{
          background:#fff;
          border-radius:15px;
          overflow-x:auto;
          box-shadow:0 4px 10px rgba(0,0,0,0.08);
        }

        table{
          width:100%;
          border-collapse:collapse;
        }

        th{
          background:#2563EB;
          color:#fff;
          padding:14px;
        }

        td{
          padding:12px;
          text-align:center;
          border-bottom:1px solid #E5E7EB;
        }

        tr:hover{
          background:#EFF6FF;
        }

        .edit-btn{
          background:#16A34A;
          color:#fff;
          border:none;
          padding:8px 12px;
          border-radius:6px;
          cursor:pointer;
          margin-right:5px;
        }

        .delete-btn{
          background:#DC2626;
          color:#fff;
          border:none;
          padding:8px 12px;
          border-radius:6px;
          cursor:pointer;
        }

        @media(max-width:992px){
          .manage-students{
            margin-left:80px;
            padding:20px;
          }
        }

        @media(max-width:768px){
          .manage-students{
            margin-left:0;
            margin-top:70px;
            padding:15px;
          }

          .form{
            grid-template-columns:1fr;
          }

          table{
            min-width:700px;
          }
        }
      `}</style>

      <div className="manage-students">
        <h2 className="title">🎓 Manage Students</h2>

        {/* Search */}
        <input
          className="search"
          type="text"
          placeholder="Search by Name or Register Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Form */}
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="input"
            type="text"
            name="regNo"
            placeholder="Register Number"
            value={form.regNo}
            onChange={handleChange}
          />

          <input
            className="input"
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
          />

          <select
            className="input"
            name="year"
            value={form.year}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option value="I">I Year</option>
            <option value="II">II Year</option>
            <option value="III">III Year</option>
          </select>

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email ID"
            value={form.email}
            onChange={handleChange}
          />

          <button className="add-btn" type="submit">
            {editId ? "Update Student" : "Add Student"}
          </button>
        </form>

        {/* Student Table */}
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Reg No</th>
                <th>Department</th>
                <th>Year</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.regNo}</td>
                    <td>{student.department}</td>
                    <td>{student.year}</td>
                    <td>{student.email}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(student)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ padding: "20px" }}>
                    No Students Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ManageStudents;