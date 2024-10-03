import InternalLink from "@/components/link/internal";
import {LinkType, ReactNodeProps} from "@/lib/types/core";
import ExternalLink from "@/components/link/external";
import EmailLink from "@/components/link/email";

export type LinkProps = {
  link: LinkType;
} & ReactNodeProps;

export default function Link({
  className,
  link,
  children,
}: LinkProps) {
  switch (link.type) {
    case 'internal':
      return (
        <InternalLink
            className={className}
            link={link}>
          {children}
        </InternalLink>
      );
    case 'external':
      return (
        <ExternalLink
          className={className}
          link={link}>
          {children}
        </ExternalLink>
      );
    case 'email':
      return (
        <EmailLink
          className={className}
          link={link}>
          {children}
        </EmailLink>
      );
    default:
      return null;
  }
}
