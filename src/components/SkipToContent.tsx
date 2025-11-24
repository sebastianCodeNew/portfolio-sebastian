/**
 * SkipToContent - Accessibility component for keyboard navigation
 * Allows screen reader users and keyboard users to jump directly to main content
 */
const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md focus:glow-blue"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
