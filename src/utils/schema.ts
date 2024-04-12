import z from "zod";

const phoneNumberRegexp = new RegExp(
  /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
);
const FIELD_REQUIRED_STR = "This field is required";
export const GENDER_OPTIONS = ["Male", "Female", "Other"] as const;

export const signUpFormSchema = z.object({
  userName: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: FIELD_REQUIRED_STR,
    })
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .trim(),
  // password: z.custom
});

export type LoginSchema = z.infer<typeof signUpFormSchema>;
