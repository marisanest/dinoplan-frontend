"use client"

import { motion } from 'motion/react';
import useOverlayMenu from "@/lib/stores/useOverlayMenuStore";
import {useShallow} from "zustand/react/shallow";
import InternalLink from "@/components/link/internal";
import EmailLink from "@/components/link/email";
import Text from "@/components/text/text";
import {useEffect} from "react";

export type OverlayMenuProps = {
    contact: any;
};

export default function OverlayMenu({contact}: OverlayMenuProps) {
  const { isOpen, toggleOpen } = useOverlayMenu(
      useShallow((state) => ({
          isOpen: state.isOpen,
          toggleOpen: state.toggleOpen,
      })),
  );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            // document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

  return (
      <motion.div
          className="min-w-screen max-w-screen fixed left-0 top-0 z-40 flex h-screen max-h-screen min-h-screen w-screen flex-col bg-orange-200 pt-[calc(var(--height-banner)+var(--spacing-y-s))] px-x-s"
          transition={{duration: 0.5}}
          initial="close"
          animate={isOpen ? 'open' : 'close'}
          variants={{
              close: {left: '100vw'},
              open: {left: 0},
          }}
      >
          <div className="flex flex-col">
              <div className="flex flex-col gap-[0.125rem]">
                  <div onClick={toggleOpen}>
                      <InternalLink href="/kalender">
                          <Text size="xl" align="left">Termin vereinbaren</Text>
                      </InternalLink>
                  </div>
                  <div onClick={toggleOpen}>
                      <InternalLink href="/rechner/start" scroll>
                          <Text size="xl" align="left">Beitrag berechnen</Text>
                      </InternalLink>
                  </div>
              </div>

              <div className="flex flex-col gap-[0.125rem] pt-x-s">
                  <div onClick={toggleOpen}>
                      <InternalLink href="/#faq" scroll>
                          <Text className="!text-base" size="lg" align="left">Fragen?</Text>
                      </InternalLink>
                  </div>
                  <div onClick={toggleOpen}>
                      <EmailLink href={contact.email.email}>
                          <Text className="!text-base" size="lg" align="left">Kontakt</Text>
                      </EmailLink>
                  </div>
                  <div onClick={toggleOpen}>
                      <InternalLink href="/impressum">
                          <Text className="!text-base" size="lg" align="left">Impressum</Text>
                      </InternalLink>
                  </div>
                  <div onClick={toggleOpen}>
                      <InternalLink href="/datenschutz">
                          <Text className="!text-base" size="lg" align="left">Datenschutz</Text>
                      </InternalLink>
                  </div>
              </div>
          </div>
      </motion.div>
  )
}
