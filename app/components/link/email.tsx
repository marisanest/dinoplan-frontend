import type {ReactNode} from 'react';
import {LinkProps} from "@/components/link/index";

export default function EmailLink({
  className,
  link,
  children,
}: LinkProps): ReactNode {
  return (
      <a className={className}
         href={link.href}>
        {children && children}
      </a>
  );
}