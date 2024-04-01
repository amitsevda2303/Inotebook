import React, { useEffect } from "react";
import UpdateNotes from "./UpdateNotes";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigat = useNavigate();
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      navigat("/Login");
    }
  }, []);

  return (
    <>
      <UpdateNotes />
    </>
  );
};

export default Home;
