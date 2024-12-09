export const BASE_API_URL = "https://mdf3chcy3hzgjy437hshb743de0xkwcd.lambda-url.us-east-2.on.aws";

export const getApiUrl = (path : string) => {
    return `${BASE_API_URL}${path}`;
  };