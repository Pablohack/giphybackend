import axios, { AxiosError, HttpStatusCode } from "axios";
import { IApi } from "./api.interface";

export class ApiRepository<T> implements IApi<T> {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }

  async get<T>(path: string, params: Record<string, string>): Promise<T> {
    try {
      const { data } = await axios.get<T>(`${this.url}${path}`, {
        params: { ...params },
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.message);
      }
    }
  }

  async insert<K>(
    data: K,
    header: Record<string, string>
  ): Promise<HttpStatusCode> {
    try {
      const { status } = await axios.post(this.url, data, {
        headers: { ...header },
      });

      return status;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.message);
      }
    }
  }
}
