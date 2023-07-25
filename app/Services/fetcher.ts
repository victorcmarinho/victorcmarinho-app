import { headers } from "../config/requestHeader";

const fetcher = <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> =>
  fetch(input, { ...init, ...headers }).then((response) => response.json());

export default fetcher;
