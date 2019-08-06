import React, { Fragment, useState } from "react";
import { useFetchEffect } from "utils/hooks";
import { fetchJson } from "utils/fetch";
import { Link } from "react-router-dom";
import { ENDPOINT } from "../constants";
import QuestionForm from "./new-question-form";

export default function Questions(props) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useFetchEffect(ENDPOINT, {
    setResult: setQuestions,
    setIsLoading,
    setMessage,
  });

  async function updateQuestions() {
    try {
      setIsLoading(true);
      const result = await fetchJson(ENDPOINT);
      setQuestions(result);
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
  return (
    <Fragment>
      <h1>Questions</h1>
      <ol>
        {questions.map((question) => {
          const { id, question_text } = question;
          return (
            <li key={id}>
              <Link to={`/${id}`}>
                {question_text}
              </Link>
            </li>
          );
        })}
      </ol>
      <QuestionForm onSubmit={updateQuestions}/>
    </Fragment>
  )
}
