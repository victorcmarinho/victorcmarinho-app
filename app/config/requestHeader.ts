export const headers: HeadersInit = {
  Authorization: `${process.env.GIT_SECRET}`,
  "User-Agent": "victorcmarinho",
  "Content-Type": "application/json; charset=utf-8",
};
