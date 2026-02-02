import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = "Name required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Invalid email";
    if (!formData.id) err.id = "ID required";
    if (!formData.password) err.password = "Password required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(formData);
    setFormData({ name: "", email: "", id: "", password: "" });
    setErrors({});
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-3">
      <h2 className="text-lg font-bold">User Form</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        {["name", "email", "id"].map((field) => (
          <div key={field}>
            <input
              name={field}
              placeholder={field.toUpperCase()}
              value={formData[field]}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}

        <div>
          <div className="flex gap-2">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="border px-3 rounded"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button className="bg-black text-white py-2 rounded">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="border p-2 rounded text-sm">
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>ID:</b> {submitted.id}</p>
        </div>
      )}
    </div>
  );
}
