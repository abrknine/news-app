import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" /*style={{width: '18rem'}}*/>
          <img
            src={
              !imageURL
                ? "https://media.cnn.com/api/v1/images/stellar/prod/230105114141-ovidio-guzman-file-101719.jpg?c=16x9&q=w_800,c_fill"
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsURL}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              read more
            </a>
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ left: "85%", zIndex: "1" }}
            >
              {source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
