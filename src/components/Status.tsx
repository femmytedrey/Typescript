type StatusText = {
  status: 'success' | 'loading' | 'error';
};
export const Status = (props: StatusText) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Success is not a day job";
  } else if (props.status === "error") {
    message = "Error accessing the page";
  }
  return <h2>{message}</h2>;
};
