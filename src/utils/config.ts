export const api = process.env.VITE_APP_API_URL;
export const uploads = process.env.VITE_APP_UPLOADS_URL;

interface RequestConfig {
  method: string;
  body?: unknown;
  token?: string | null;
  image?: string | null;
  headers: {
    [key: string]: string;
  };
}

export const requestConfig = ({
  method,
  body,
  token = null,
  image = null,
}: RequestConfig) => {
  let config: RequestConfig;

  if (image) {
    config = {
      method: method,
      body: body,
      headers: {},
    };
  } else if (method === "DELETE" || body === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
