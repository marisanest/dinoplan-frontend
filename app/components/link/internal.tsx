import type {ReactNode} from 'react';
import Link from "next/link";
import {ReactNodeProps} from "@/lib/types/core";

export type InternalLinkProps = {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
} & ReactNodeProps;

export default function InternalLink({
  className,
  href,
  replace = false,
  scroll = true,
  prefetch = true,
  children,
}: InternalLinkProps): ReactNode {
  return (
    <Link
        href={href}
        className={className}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}>
      {children}
    </Link>
  );
}
