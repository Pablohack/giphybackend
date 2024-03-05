import { HttpStatusCode } from "axios";

export interface IApi<T> {
  get(params: Record<string, string>): Promise<T[]>;
  insert<K>(data: K, header: Record<string, string>): Promise<HttpStatusCode>;
}
