
import React from 'react';
import { ToastContainer } from './design-system/toast/Toast';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer position="bottom-right" />
    </>
  );
}
