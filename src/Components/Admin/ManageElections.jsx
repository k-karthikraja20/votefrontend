import { useEffect, useState } from "react";
import api from "../Services/api";

const empty = { name: "", position: "", startDate: "", endDate: "", status: "upcoming" };

export default function ManageElections() {
  const [form, setForm] = useState(empty);
  const [elections, setElections] = useState([]);
  const [editing, setEditing] = useState(null);
  const [message, setMessage] = useState("");

  const load = async () => {
    try {
      setElections((await api.get("/elections")).data);
    } catch (e) {
      setMessage(e.response?.data?.message || "Unable to load elections.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.put(`/elections/${editing}`, form);
      else await api.post("/elections", form);

      setForm(empty);
      setEditing(null);
      setMessage("Election saved.");
      load();
    } catch (err) {
      setMessage(err.response?.data?.message || "Unable to save election.");
    }
  };

  const edit = (x) => {
    setEditing(x._id);
    setForm({
      name: x.name,
      position: x.position,
      startDate: x.startDate.slice(0, 10),
      endDate: x.endDate.slice(0, 10),
      status: x.status,
    });
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this election?")) return;
    try {
      await api.delete(`/elections/${id}`);
      load();
    } catch (e) {
      setMessage(e.response?.data?.message || "Unable to delete election.");
    }
  };

  return (
    <main className="manage-elections-page">
      <h1>Manage Elections</h1>
      {message && <p className="manage-elections-message">{message}</p>}

      <form className="manage-elections-form" onSubmit={submit}>
        <input
          required
          placeholder="Election name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          placeholder="Position"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        />

        <label>
          Start date
          <input
            required
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          />
        </label>

        <label>
          End date
          <input
            required
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
          />
        </label>

        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option value="upcoming">Upcoming</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <button className="manage-elections-btn primary" type="submit">
          {editing ? "Update election" : "Add election"}
        </button>
      </form>

      <table className="manage-elections-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Dates</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elections.map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.position}</td>
              <td>{x.startDate.slice(0, 10)} – {x.endDate.slice(0, 10)}</td>
              <td>{x.status}</td>
              <td>
                <button type="button" className="manage-elections-btn secondary" onClick={() => edit(x)}>
                  Edit
                </button>
                <button type="button" className="manage-elections-btn danger" onClick={() => remove(x._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
