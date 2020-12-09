export const success: ResType = {
  status: 200,
  message: "Success",
  data: {},
};

export const fail: ResType = {
  status: 403,
  message: "Failed",
  data: null,
};

export const unauth: ResType = {
  status: 401,
  message: "Unauthorized",
  data: null,
};
