import * as React from "react";
import { UserNav } from "./UserNav";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className="flex h-16 items-center px-4 bg-slate-900">
      <div className="flex w-full justify-end">
        <UserNav />
      </div>
    </header>
  );
}
