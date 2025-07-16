import { FormStateAction } from "@/types/formTypes";

export async function signUpPostAction(
  prevState: FormStateAction,
  formData: FormData
) {
  "use server";

  let errors: string[] = [];

  const emailComedian = formData.get("email") as string;
  const nameComedian = formData.get("name") as string;
  const jokeComedian = formData.get("joke") as string;

  if (!emailComedian || emailComedian.length < 0) {
    errors.push("Email it's empty");
  }

  if (!nameComedian || nameComedian.length < 0) {
    errors.push("Name it's empty");
  }

  if (!jokeComedian || jokeComedian.length < 0) {
    errors.push("Joke it's empty");
  }

  if (errors.length > 1) {
    return {
      message: "",
      errors,
    };
  }

  //   await signUpComedian({ emailComedian, nameComedian, jokeComedian });

  return {
    message: "",
    errors: [],
  };
}

export const initialStateFormSignUp: FormStateAction = {
  message: "",
  errors: [],
};
