'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type RequestServiceContextValue = {
  isOpen: boolean;
  serviceName?: string;
  open: (serviceName?: string) => void;
  close: () => void;
};

const RequestServiceContext = createContext<RequestServiceContextValue | null>(null);

export function RequestServiceProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState<string | undefined>(undefined);

  const value = useMemo(() => {
    return {
      isOpen,
      serviceName,
      open: (name?: string) => {
        setServiceName(name);
        setIsOpen(true);
      },
      close: () => setIsOpen(false)
    };
  }, [isOpen, serviceName]);

  return <RequestServiceContext.Provider value={value}>{children}</RequestServiceContext.Provider>;
}

export function useRequestServiceModal() {
  const context = useContext(RequestServiceContext);
  if (!context) {
    throw new Error('useRequestServiceModal must be used within RequestServiceProvider');
  }
  return context;
}
