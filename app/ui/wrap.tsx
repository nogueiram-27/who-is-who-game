import React from 'react';

export interface WrapProps extends React.HTMLAttributes<HTMLElement> {
  center?: boolean;
  size?: 'default' | 'small' | 'large';
  spacer?: boolean;
  tagName?: React.ElementType;
}

function getWrapSize(size: WrapProps['size']) {
  switch (size) {
    case 'large':
      return 'max-w-screen-2xl';
    case 'small':
      return 'max-w-screen-lg';
    default:
      return 'max-w-screen-xl';
  }
}

const Wrap = React.forwardRef<HTMLElement, WrapProps>(
  (
    {
      center = true,
      children,
      className = '',
      size = 'large',
      spacer = true,
      tagName = 'section',
      ...props
    },
    ref,
  ) => {
    const Component = tagName;

    return (
      <main
        ref={ref}
        className={[
          'relative w-full max-w-screen-2xl grid py-8 px-4',
          className,
        ].join(' ')}
        {...props}
      >
        {children}
      </main>

    );
  },
);

export default Wrap
