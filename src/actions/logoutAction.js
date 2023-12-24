import { redirect } from "react-router-dom";
import { deleteItem } from "../helperFns";
import { toast } from "react-toastify";

export default async function logoutAction() {
  deleteItem("userName");
  //   deleteItem("todos");
  toast.info("You've deleted your account.");
  return redirect("/");
}
