import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !desc.trim()) {
      return;
    }

    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .send(
        "service_si18qvc",
        "template_iphxn1b",
        {
          user_name: username,
          user_email: email,
          message: desc,
        },
        "VpGUBNfj7HRCvIzb7",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setUsername("");
        setEmail("");
        setDesc("");
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-container">
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label text-white">
            Name
          </label>
          <textarea
            rows="1"
            id="contactName"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label text-white">
            Email address
          </label>
          <input
            type="email"
            id="contactEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactDesc" className="form-label text-white">
            Description
          </label>
          <textarea
            rows="8"
            id="contactDesc"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && (
          <div className="text-success mt-3 text-center">
            <strong>Message sent successfully.</strong>
          </div>
        )}

        {error && (
          <div className="text-danger mt-3 text-center">
            <strong>Something went wrong. Try again.</strong>
          </div>
        )}
      </div>
    </form>
  );
}
