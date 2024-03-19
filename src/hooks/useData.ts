import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint : string , RequestConfig?: AxiosRequestConfig , deps? : any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal , ...RequestConfig})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, deps ? deps : []);
  return { data, err, isLoading };
};
export default useData;
