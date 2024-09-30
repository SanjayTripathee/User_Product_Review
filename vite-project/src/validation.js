import * as yup from "yup";

export let reviewValidationSchema = yup.object({
  user: yup.string().required("user is required"),
  product: yup.string().required("product is required"),
  description: yup.string().required("Description is required"),
});


