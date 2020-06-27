import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

export default class DishDetail extends Component {
  componentDidMount() {
    console.log("DishDetail component componentDidMount invoked ");
  }
  componentDidUpdate() {
    console.log("DishDetail component componentDidUpdate invoked ");
  }
  convertDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(date));
  }

  renderComments(dish) {
    if (dish != null) {
      const comments = dish.comments;
      const comment = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author}
              &nbsp;
              {this.convertDate(comment.date)}
            </p>
          </li>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          <ul className="list-unstyled">{comment}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log("DishDetail component render invoked ");

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}
