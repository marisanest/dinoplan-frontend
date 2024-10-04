import type {ReactNode} from 'react';
import {ReactNodeProps} from "@/lib/types/core";

export type ExternalLinkProps = {
  href: string;
} & ReactNodeProps;

export default function ExternalLink({
  className,
  href,
  children,
}: ExternalLinkProps): ReactNode {
  return (
      <a className={className}
         target="_blank"
         rel="noopener noreferrer"
         href={href}>
        {children && children}
      </a>
  );
}
