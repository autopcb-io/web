"use client";

import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function NavAuth() {
  return (
    <Show
      when="signed-in"
      fallback={
        <>
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">무료 시작</Button>
          </Link>
        </>
      }
    >
      <Link href="/dashboard">
        <Button variant="ghost" size="sm">
          대시보드
        </Button>
      </Link>
      <UserButton />
    </Show>
  );
}
