import { FormStateAction } from "@/types/formTypes";

export async function loginActionPost(
  prevState: FormStateAction,
  formData: FormData
) {
  "use server";

  let errors: string[] = [];
  const emailComedian = formData.get("email") as string;
  const nameComedian = formData.get("name") as string;

  if (!emailComedian || emailComedian.length < 0) {
    errors.push("Email it's empty");
  }

  if (!nameComedian || nameComedian.length < 0) {
    errors.push("Name it's empty");
  }

  if (errors.length > 1) {
    return {
      message: "Incorrect!",
      errors,
    };
  }

  return {
    message: "",
    errors: [],
  };

  // await createComedian({nameComedian, emailComedian})
}

export const initialStateFormLogin: FormStateAction = {
  message: "",
  errors: [],
};
