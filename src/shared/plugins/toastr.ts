import { toast } from "react-toastify";

export const showToastr = (message: string, type: string) => {
  const options = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    hideProgressBar: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
    closeOnClick: true,
    className: "custom__toastr",
  };
  switch (type) {
    case "success":
      return toast.success(message, options);
    case "error":
      return toast.error(message, options);
    case "info":
      return toast.info(message, options);
    case "warn":
      return toast.warn(message, options);
    case "dark":
      return toast.dark(message, options);
    default:
      return toast(message, options);
  }
};
