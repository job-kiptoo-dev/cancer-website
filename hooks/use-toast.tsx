import * as React from "react";
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number;
};

const toast = ({ title, description, action, ...props }: ToastProps) => {
  return sonnerToast(title, {
    description,
    action: action as any,
    ...props,
  });
};

function useToast() {
  return {
    toast,
    dismiss: (id?: string | number) => sonnerToast.dismiss(id),
  };
}

export { useToast, toast };
