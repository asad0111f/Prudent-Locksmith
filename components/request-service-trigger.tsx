'use client';

import { Button } from '@/components/ui/button';
import { useRequestServiceModal } from '@/components/request-service-context';

type RequestServiceTriggerProps = {
  serviceName?: string;
  label?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  className?: string;
  variantKey?: 'control' | 'alt';
};

export function RequestServiceTrigger({
  serviceName,
  label = 'Request Service',
  variant = 'secondary',
  size = 'md',
  className,
  variantKey = 'control'
}: RequestServiceTriggerProps) {
  const { open } = useRequestServiceModal();
  const resolvedLabel = label || (variantKey === 'alt' ? 'Get Help Now' : 'Request Service');

  // A/B testing hook: switch label or styles by variantKey when experiments are enabled.
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={() => open(serviceName)}
    >
      {resolvedLabel}
    </Button>
  );
}
