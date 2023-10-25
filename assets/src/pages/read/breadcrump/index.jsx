import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumb = () => {
  return (
    <section>
      <Breadcrumb>
        <Breadcrumb.Item href="http://127.0.0.1:8000">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="http://127.0.0.1:8000/phantomblood/">
          partie 1
        </Breadcrumb.Item>
        <Breadcrumb.Item href="http://127.0.0.1:8000/phantomblood/diolenvahisseur">
          tome 1
        </Breadcrumb.Item>
        <Breadcrumb.Item active>read</Breadcrumb.Item>
      </Breadcrumb>
    </section>
  );
};

export default BreadCrumb;
