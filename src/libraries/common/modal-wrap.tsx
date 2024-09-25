'use client';
import clsx from 'clsx';
import React, { Children, ReactNode } from 'react';
import Modal from 'react-modal';

type ModalWrapProps = {
  isOpen: boolean;
  onClose?: () => void;
  children?: JSX.Element | ReactNode;
  className?: string;
};
export function ModalWrap({ isOpen, children, onClose, className }: ModalWrapProps) {
  return (
    <Modal
      style={{ overlay: { zIndex: 999 } }}
      isOpen={isOpen}
      onRequestClose={onClose}
      className={clsx(className, 'modal-custom')}
    >
      {children}
    </Modal>
  );
}
