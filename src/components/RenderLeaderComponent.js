import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
const RenderLeader = ({ leaders }) => {
  if (leaders != null) {
    console.log(leaders, "leaders");
    return (
      <ul className="list-unstyled">
        {leaders.map((leader) => {
          return (
            <div key={leader.id} className="col-12 mt-5">
              <Media tag="li">
                <Media left middle>
                  <Media object src={leader.image} alt={leader.name} />
                </Media>
                <Media body className="col-12">
                  <Media heading>{leader.name}</Media>
                  <p>{leader.designation}</p>
                  <p>{leader.description}</p>
                </Media>
              </Media>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return <div></div>;
  }
};
export default RenderLeader;
