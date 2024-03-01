import * as z from "zod";

export const postTravelSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
});

export const deleteTravelSchema = z.object({
  id: z.string().min(2, {
    message: "id must be at least 2 characters.",
  }),
});
