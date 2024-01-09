"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { DialogHeader } from "./ui/dialog";

import * as React from "react";

interface DeleteConfirmationProps {
  onCancel?: () => void;
  onDelete?: () => Promise<void>;
}

function DeleteConfirmation({ onCancel, onDelete }: DeleteConfirmationProps) {
  const [open, setOpen] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setDeleting(true);

    await onDelete?.();
    setDeleting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Click Delete, will be delete the data permanent
            </DialogDescription>
          </DialogHeader>

          <div className="flex-row">
            <DialogClose asChild>
              <Button variant="destructive" onClick={handleSubmit}>
                {deleting ? "Deleting..." : "Delete"}
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={onCancel} variant="ghost">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmation;
