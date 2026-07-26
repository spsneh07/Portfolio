import { useEffect, useRef } from 'react';

/**
 * useCursor manages the global state of the custom cursor using requestAnimationFrame
 * for high performance tracking without React re-renders.
 */
export function useCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices with a fine pointer
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Mouse coordinates
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Ring coordinates (delayed)
    let ringX = mouseX;
    let ringY = mouseY;
    
    // Dot coordinates (fast, but smoothed slightly)
    let dotX = mouseX;
    let dotY = mouseY;
    
    let isVisible = false;
    let hoverState = '';
    let isClicking = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      // Check hover state via data-cursor attribute or tag names
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        hoverState = cursorTarget.getAttribute('data-cursor') || '';
      } else if (target.closest('a') || target.closest('button')) {
        hoverState = 'link';
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, span, strong, em')) {
        hoverState = 'text';
      } else {
        hoverState = '';
      }
      
      updateClasses();
    };

    const onMouseDown = () => {
      isClicking = true;
      updateClasses();
    };
    
    const onMouseUp = () => {
      isClicking = false;
      updateClasses();
    };
    
    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    
    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const updateClasses = () => {
      // Base classes that must persist
      const baseRing = 'fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border transition-all duration-300 ease-out origin-center flex items-center justify-center mix-blend-screen';
      
      // Default styles
      let ringSize = 'w-8 h-8';
      let ringColor = 'border-indigo-500/50';
      let ringTransform = isClicking ? 'scale(0.8)' : 'scale(1)';
      
      if (hoverState === 'link') {
        ringSize = 'w-12 h-12';
        ringColor = 'border-indigo-400 bg-indigo-500/10 backdrop-blur-[2px]';
        ringTransform = isClicking ? 'scale(0.9)' : 'scale(1)';
      } else if (hoverState === 'card') {
        ringSize = 'w-24 h-24';
        ringColor = 'border-violet-500/30 bg-violet-500/5 backdrop-blur-[1px]';
        ringTransform = isClicking ? 'scale(0.95)' : 'scale(1)';
      } else if (hoverState === 'text') {
        ringSize = 'w-6 h-6';
        ringColor = 'border-indigo-500/30';
      }
      
      ring.className = `${baseRing} ${ringSize} ${ringColor}`;
      ring.style.transform = `translate3d(calc(${ringX}px - 50%), calc(${ringY}px - 50%), 0) ${ringTransform}`;
      
      // Manage dot classes
      let dotTransform = isClicking ? 'scale(0.5)' : 'scale(1)';
      if (hoverState === 'text') dotTransform = 'scale(0.8)';
      
      dot.style.transform = `translate3d(calc(${dotX}px - 50%), calc(${dotY}px - 50%), 0) ${dotTransform}`;
    };

    const render = () => {
      // Linear interpolation (lerp)
      // Dot moves very fast towards mouse
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;
      
      // Ring moves slower for trail effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      // Calculate transforms using GPU acceleration
      const dotTransform = isClicking ? 'scale(0.5)' : (hoverState === 'text' ? 'scale(0.8)' : 'scale(1)');
      
      let ringScale = isClicking ? 0.8 : 1;
      if (hoverState === 'link') ringScale = isClicking ? 0.9 : 1;
      if (hoverState === 'card') ringScale = isClicking ? 0.95 : 1;
      
      dot.style.transform = `translate3d(calc(${dotX}px - 50%), calc(${dotY}px - 50%), 0) ${dotTransform}`;
      ring.style.transform = `translate3d(calc(${ringX}px - 50%), calc(${ringY}px - 50%), 0) scale(${ringScale})`;

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Initialize initial state
    updateClasses();
    
    // Start render loop
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { dotRef, ringRef };
}
