import { useEffect } from "react";
import { fetchJson } from "./fetch";

export function useFetchEffect(url, options) {
  const {
    fetchOptions,
    setResult,
    setIsLoading,
    setMessage,
    deps = [],
  } = options;
  useEffect(() => {
    let isCurrentRequest = true;

    setIsLoading(true);
    setMessage("");
    fetchJson(url, fetchOptions)
      .then(result => {
        isCurrentRequest && setResult(result);
      }).catch(error => {
        console.error(error);
        isCurrentRequest && setMessage(error.toString());
      }).then(() => {
        isCurrentRequest && setIsLoading(false);
      });
    return () => isCurrentRequest = false;
  }, [
    setResult,
    setIsLoading,
    setMessage,
    url,
    fetchOptions,
    // eslint-disable-next-line
    ...deps,
  ]);
}
