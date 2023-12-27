import { redirect } from "react-router-dom";
import { deleteItem } from "../helperFns";
import { toast } from "react-toastify";

export default async function logoutAction() {
  deleteItem("userName");
  // console.log("UserName deleted.");
  deleteItem("todos");
  // console.log("Todos deleted.");
  toast.info("You've deleted your account.");
  return redirect("/");
}
