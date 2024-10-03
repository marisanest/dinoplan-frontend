import type {ReactNode} from 'react';
import {LinkProps} from "@/components/link/index";

export default function ExternalLink({
  className,
  link,
  children,
}: LinkProps): ReactNode {
  return (
      <a className={className}
         target="_blank"
         rel="noopener noreferrer"
         href={link.href}>
        {children && children}
      </a>
  );
}
