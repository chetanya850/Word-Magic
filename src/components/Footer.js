import React from "react";

function Footer(props) {

  return (
    <>
      <footer className={`py-2 bg-${props.mode} text-${props.colormode} navbar fixed-bottom`}>
        <div className="container text-center">
          <small>Copyright &copy; Chetanya Sharma~2021</small>
        </div>
      </footer>
    </>
  );
};

export default Footer
