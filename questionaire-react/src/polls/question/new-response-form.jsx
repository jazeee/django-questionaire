import React, { Fragment } from "react";
import { ENDPOINT } from "../constants";
import { fetchJson } from "utils/fetch";
import ValueForm from "utils/value-form";

export default function ResponseForm(props) {
  const { questionId, onSubmit } = props;
  const addResponse = async (value) => {
    const response = await fetchJson(`${ENDPOINT}/${questionId}/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // FIXME Don't pass in the questionId
        question: questionId,
        response_text: value,
      }),
    });
    onSubmit();
    return response;
  }
  return (
    <Fragment>
      <hr/>
      <ValueForm
        id="response"
        labelText="Add a Response:"
        onSubmit={addResponse}
      />
    </Fragment>
  )
}
