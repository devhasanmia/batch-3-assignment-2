export const catchError = (error: any) => {
  throw new Error(`${error.message || error.toString()}`);
};
