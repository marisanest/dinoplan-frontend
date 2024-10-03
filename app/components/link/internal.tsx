import type {ReactNode} from 'react';
import Link from "next/link";
import {LinkProps} from "@/components/link/index";

export type InternalLinkProps = {
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
} & LinkProps;

export default function InternalLink({
  className,
  link,
  replace = false,
  scroll = false,
  prefetch = true,
  children,
}: InternalLinkProps): ReactNode {
  return (
    <Link
        href={link.href}
        className={className}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}>
      {children}
    </Link>
  );
}
