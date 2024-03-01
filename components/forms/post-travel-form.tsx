"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useAction} from "next-safe-action/hooks";

import {postTravelSchema} from "@/schemas/form/post-travel";
import {createTravel} from "@/app/travels/queries";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Button} from "../ui/button";
import {Input} from "../ui/input";

export default function PostTravelForm() {
  const form = useForm<z.infer<typeof postTravelSchema>>({
    resolver: zodResolver(postTravelSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const {execute, status} = useAction(createTravel, {
    onSuccess(data) {
      if (data?.error) console.log(data.error);
      if (data?.success) console.log(data.success);
    },
    onExecute(data) {
      console.log("creating post....");
    },
  });

  function onSubmit(values: z.infer<typeof postTravelSchema>) {
    execute(values);
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({field}) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder="content" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={status === "executing"} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
