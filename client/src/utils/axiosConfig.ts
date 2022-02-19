export const getHeadersConfig = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}