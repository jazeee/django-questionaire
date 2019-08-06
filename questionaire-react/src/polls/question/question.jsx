import React, { Fragment, useState } from "react";
import { useFetchEffect } from "utils/hooks";
import { fetchJson } from "utils/fetch";
import ResponseForm from "./new-response-form"
import { ENDPOINT } from "../constants";

export default function Questions(props) {
  const { match: { params } } = props;
  const { id } = params;
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const url = `${ENDPOINT}/${id}`;

  useFetchEffect(url, {
    setResult: setQuestion,
    setIsLoading,
    setMessage,
    deps: [id],
  });

  async function updateQuestion() {
    try {
      setIsLoading(true);
      const result = await fetchJson(url);
      setQuestion(result);
    } catch (error) {
      console.error(error);
      setMessage(error.toString());
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (message) {
    return (
      <p>{message}</p>
    );
  }

  if (!question) {
    return (
      <p>Failed to retrieve a question</p>
    )
  }
  const { question_text, responses } = question;
  return (
    <Fragment>
      <h1>Question</h1>
      <h4>{question_text}</h4>
      {responses.length ?
        <ul>
          {responses.map((response) => {
            const { id, response_text } = response;
            return (
              <li key={id}>{response_text}</li>
            )
          })}
        </ul>
        : <p>No responses</p>
      }
      <ResponseForm
        questionId={id}
        onSubmit={updateQuestion}
      />
    </Fragment>
  )
}
