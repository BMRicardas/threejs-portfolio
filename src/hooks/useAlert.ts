import { useState } from "react";

type Alert = {
  show: boolean;
  text: string;
  type: "danger" | "success";
};

export function useAlert() {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: Alert) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
}
