import React from "react";
import Login from "@/app/_components/Login";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function page() {
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <Login />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
