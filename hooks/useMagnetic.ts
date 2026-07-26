import { useEffect, useRef } from "react";

/**
 * useMagnetic applies a subtle magnetic pull effect to the referenced element
 * when the mouse hovers over it. Uses requestAnimationFrame for performance.
 */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Only apply on devices with fine pointers
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let isHovering = false;
    let animationFrameId: number;
    
    // Target position for the element to translate to
    let targetX = 0;
    let targetY = 0;
    
    // Current position of the element (used for lerping)
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      // Calculate the center of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from center (max 15px pull for subtle effect)
      // The pull gets stronger as you get closer to the edge, but we cap it.
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      // We pull by a fraction of the distance (e.g., 20% max)
      targetX = distanceX * 0.2;
      targetY = distanceY * 0.2;
      
      // Cap the translation to keep it subtle
      const maxPull = 15;
      targetX = Math.max(-maxPull, Math.min(maxPull, targetX));
      targetY = Math.max(-maxPull, Math.min(maxPull, targetY));
    };

    const onMouseEnter = () => {
      isHovering = true;
      animationFrameId = requestAnimationFrame(render);
    };

    const onMouseLeave = () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
      // The render loop will continue lerping back to 0,0 and then stop
    };

    const render = () => {
      // Lerp current position towards target position
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // If we're not hovering and we're back to 0, we can stop the loop
      if (!isHovering && Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1) {
        element.style.transform = `translate3d(0, 0, 0)`;
        return;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    element.addEventListener("mousemove", onMouseMove, { passive: true });
    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseenter", onMouseEnter);
      element.removeEventListener("mouseleave", onMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return ref;
}
