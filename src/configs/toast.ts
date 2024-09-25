import toast from 'react-hot-toast';

export const toastSuccess = (mess: string) => {
  return toast.success(mess, { duration: 5000 });
};

export const toastError = (mess: string) => {
  return toast.error(mess);
};
