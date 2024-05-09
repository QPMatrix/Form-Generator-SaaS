"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { Button } from "../ui/button";
import Form from "./form";
const CreateFormBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>

          <DialogDescription>
            Create new form to start collection responses
          </DialogDescription>
        </DialogHeader>
        <Form />
      </DialogContent>
    </Dialog>
  );
};

export default CreateFormBtn;
