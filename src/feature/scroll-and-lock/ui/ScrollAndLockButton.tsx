import { FC, useEffect, useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { useScrollLock } from "@/feature/scroll-and-lock/hooks/useScrollLock";
import { Icons } from "@/shared/icons";
import * as cls from "./ScrollAndLockButton.module.css"
import { E_IconSize } from "@/shared/icons/icon-size.enum";
import clsx from "clsx";
import { Button } from "@/shared/ui/button";

interface I_ScrollAndLockButtonProps {
  className?: string;
}

export const ScrollAndLockButton: FC<I_ScrollAndLockButtonProps> = (props) => {
  const [locked, setLocked] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useScrollLock(locked);

  const handleClick = () => {
    if (!locked) {
      setScrolling(true);
      scroll.scrollToTop({
        duration: 200,
        smooth: true,
      });
    } else {
      setLocked(false);
    }
  };

  useEffect(() => {
    if (!scrolling) return;

    const checkIfScrollFinished = () => {
      const atTop =
        window.scrollY <= 2;

      if (atTop) {
        setLocked(true);
        setScrolling(false);
        window.removeEventListener('scroll', checkIfScrollFinished);
      }
    };

    window.addEventListener('scroll', checkIfScrollFinished);
    checkIfScrollFinished();

    return () => window.removeEventListener('scroll', checkIfScrollFinished);
  }, [scrolling]);

  return (
    <Button onClick={ handleClick } className={ clsx(props.className, cls.scrollAndLockButton) } variant={"outline"}>
      { locked ? <Icons.Lock size={ E_IconSize.xl }/> : <Icons.Unlock size={ E_IconSize.xl }/> }
    </Button>
  );
};
