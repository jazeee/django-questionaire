export const fetchJson = async (url, fetchOptions) => {
  const response = await fetch(url, fetchOptions);
  const result = await response.json();
  if (!response.ok ) {
    throw new Error(`Unexpected response ${response.status} - ${JSON.stringify(result)}`);
  }
  if (result == null) {
    console.error(`Fetch failed for ${url}`, fetchOptions);
    throw new Error("Failed to get result");
  }
  return result;
};
