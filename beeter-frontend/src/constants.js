// wiki: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export const STATUS_CODE = {
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  NETWORK: "network",
};

export const TOKEN_KEY = "token";
export const THEME_KEY = "theme";

export const CANCEL_ACTION_REQUESTS = "CANCEL_ACTION_REQUESTS";
export const CANCEL_ALL_ACTION_REQUESTS = "CANCEL_ALL_ACTION_REQUESTS";
export const CANCEL_DATA = { cancelled: true };

export const ID_STATUS_CODE = {
  EXISTING_ACCOUNT: "EXISTING_ACCOUNT",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  FAILED_VERIFICATION: "FAILED_VERIFICATION",
  NOT_EXISTING_ACCOUNT: "NOT_EXISTING_ACCOUNT",
};

export const MIN_ZOOM = 4;
export const MAX_ZOOM = 12;
export const DEFAULT_ZOOM = 8;
export const DEFAULT_LNG = -3.741;
export const DEFAULT_LAT = 40.432;
