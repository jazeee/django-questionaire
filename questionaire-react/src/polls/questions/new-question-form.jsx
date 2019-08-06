import React, { Fragment } from "react";
import { ENDPOINT } from "../constants";
import { fetchJson } from "utils/fetch";
import ValueForm from "utils/value-form";

export default function QuestionForm(props) {
  const { onSubmit } = props;

  const addQuestion = async (value) => {
    const response = await fetchJson(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question_text: value,
        pub_date: new Date(),
      }),
    });
    onSubmit();
    return response;
  }
  return (
    <Fragment>
      <hr/>
      <ValueForm
        id="question"
        labelText="Add a Question:"
        onSubmit={addQuestion}
      />
    </Fragment>
  )
}
