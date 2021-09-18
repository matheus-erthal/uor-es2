import { postReq } from "../../services/api";

export const session = {
  login: async (body: string) => { return await postReq('login', 'login', body, false) },
  register: async (body: string) => { return await postReq('usuário', 'user', body, false) },
}
