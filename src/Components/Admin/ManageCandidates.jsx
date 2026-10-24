import React, { useState } from "react";

function ManageElections() {
  const [electionName, setElectionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("Active");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [elections, setElections] = useState([
    {
      id: 1,
      name: "Chairman Election 2026",
      start: "2026-09-10",
      end: "2026-09-12",
      status: "Active",
    },
    {
      id: 2,
      name: "Secretary Election 2026",
      start: "2026-09-15",
      end: "2026-09-16",
      status: "Inactive",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!electionName || !startDate || !endDate) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      setElections(
        elections.map((item) =>
          item.id === editId
            ? {
                ...item,
                name: electionName,
                start: startDate,
                end: endDate,
                status,
              }
            : item
        )
      );
      alert("Election Updated Successfully");
      setEditId(null);
    } else {
      setElections([
        ...elections,
        {
          id: Date.now(),
          name: electionName,
          start: startDate,
          end: endDate,
          status,
        },
      ]);
      alert("Election Added Successfully");
    }

    setElectionName("");
    setStartDate("");
    setEndDate("");
    setStatus("Active");
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setElectionName(item.name);
    setStartDate(item.start);
    setEndDate(item.end);
    setStatus(item.status);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this election?")) {
      setElections(elections.filter((item) => item.id !== id));
    }
  };

  const filteredElection = elections.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
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
          background:#EEF4FF;
        }

        /* Navbar + Sidebar Space */
        .manage-election{
          margin-top:70px;
          margin-left:250px;
          padding:30px;
          min-height:100vh;
          background:#EEF4FF;
          transition:0.3s ease;
        }

        .container{
          background:#fff;
          padding:30px;
          border-radius:18px;
          box-shadow:0 6px 15px rgba(0,0,0,0.08);
        }

        h1{
          color:#1E40AF;
          margin-bottom:20px;
        }

        .search,
        .input{
          width:100%;
          padding:12px;
          margin-bottom:15px;
          border:1px solid #CBD5E1;
          border-radius:8px;
          font-size:15px;
          outline:none;
        }

        .input:focus,
        .search:focus{
          border-color:#2563EB;
        }

        label{
          font-weight:bold;
          color:#334155;
          display:block;
          margin-bottom:6px;
        }

        .btn{
          width:100%;
          padding:12px;
          border:none;
          border-radius:8px;
          color:white;
          font-size:16px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .btn:hover{
          transform:scale(1.02);
        }

        .table-box{
          margin-top:25px;
          overflow-x:auto;
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

        .status-active{
          background:#16A34A;
          color:#fff;
          padding:6px 12px;
          border-radius:20px;
        }

        .status-inactive{
          background:#DC2626;
          color:#fff;
          padding:6px 12px;
          border-radius:20px;
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
          .manage-election{
            margin-left:80px;
            padding:20px;
          }
        }

        @media(max-width:768px){
          .manage-election{
            margin-left:0;
            margin-top:70px;
            padding:15px;
          }

          .container{
            padding:20px;
          }

          table{
            min-width:700px;
          }
        }
      `}</style>

      <div className="manage-election">
        <div className="container">
          <h1>🗳 Manage Elections</h1>

          {/* Search */}
          <input
            className="search"
            type="text"
            placeholder="Search Election..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <label>Election Name</label>
            <input
              className="input"
              type="text"
              placeholder="Enter Election Name"
              value={electionName}
              onChange={(e) => setElectionName(e.target.value)}
            />

            <label>Start Date</label>
            <input
              className="input"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label>End Date</label>
            <input
              className="input"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <label>Status</label>
            <select
              className="input"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button
              type="submit"
              className="btn"
              style={{
                background: editId ? "#F59E0B" : "#2563EB",
              }}
            >
              {editId ? "Update Election" : "Add Election"}
            </button>
          </form>

          {/* Election Table */}
          <div className="table-box">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Election Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredElection.length > 0 ? (
                  filteredElection.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                      <td>
                        <span
                          className={
                            item.status === "Active"
                              ? "status-active"
                              : "status-inactive"
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ padding: "20px" }}>
                      No Election Found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageElections;