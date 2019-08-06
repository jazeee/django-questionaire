import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Questions from "./questions/questions";
import Question from "./question/question";

export default function PollRoutes(props) {
  return (
    <Fragment>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Questions} />
      <Route exact path="/:id" component={Question} />
    </Fragment>
  )
}
