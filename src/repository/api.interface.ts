import { HttpStatusCode } from "axios";

export interface IApi<T> {
  get(path: string, params: Record<string, string>): Promise<T[]>;
  insert<K>(data: K, header: Record<string, string>): Promise<HttpStatusCode>;
}
