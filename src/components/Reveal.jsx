import { useRef, useEffect, useState } from 'react';

export default function Reveal({ children, className = '', threshold = 0.14 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} reveal ${isVisible ? 'in' : ''}`}>
      {children}
    </div>
  );
}