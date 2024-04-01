import React from "react";

export default function Footer() {
  return (
    <div className="mt-10">
      <footer className="footer mt-auto py-3 ">
        <div className="container text-center ">
          <span className="text-muted-light">
            Copyright &copy; iNoteBook {new Date().getFullYear()}. All rights 
            reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
