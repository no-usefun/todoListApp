import Contact from "./Contact";

export default function ContactMe() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div
        className="glass-card p-4 w-100"
        style={{ maxWidth: "1100px", maxHeight: "600px" }}
      >
        <h2 className="text-center mb-4 text-white">Contact Me</h2>

        <Contact />
      </div>
    </div>
  );
}
