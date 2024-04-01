import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-md-8 " style={{ marginTop: "7.3rem" }}>
          <h2 className="display-4">About iNotebook</h2>
          <p className="lead">
            iNoteBook is a cloud-based notes saving website designed to help you
            keep your notes organized and accessible from anywhere. Whether
            you're a student, professional, or simply someone who loves taking
            notes, iNotebook is the perfect companion for you.
          </p>
          <p>With iNoteBook, you can:</p>
          <ul>
            <li>Create and organize notes with ease</li>
            <li>Access your notes from any device</li>
            <li>Collaborate and share notes with others</li>
            <li>Securely store your data in the cloud</li>
          </ul>
          <p className="" style={{ marginBottom: "12rem" }}>
            Start using iNoteBook today and experience the convenience of having
            your notes at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
}
