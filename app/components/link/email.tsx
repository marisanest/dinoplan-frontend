import type {ReactNode} from 'react';
import {ReactNodeProps} from "@/lib/types/core";

export type EmailLinkProps = {
  href: string;
} & ReactNodeProps;

export default function EmailLink({
  className,
  href,
  children,
}: EmailLinkProps): ReactNode {
  return (
      <a className={className}
         target="_blank"
         rel="noopener noreferrer"
         href={`mailto:${href}`}>
        {children && children}
      </a>
  );
}