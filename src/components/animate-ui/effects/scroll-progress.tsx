'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import type { SpringOptions} from "motion/react"
import { cn } from '../../../lib/utils';
import type { RefObject } from 'react';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement | null>;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll ({container: containerRef ?? undefined})

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn('inset-x-0 top-0 h-1 origin-left z-100', className)}
      style={{
        scaleX,
      }}
    />
  );
}
