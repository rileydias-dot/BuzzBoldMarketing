"use client";

import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

interface CalendlyPopupProps {
  url: string;
  open: boolean;
  onClose: () => void;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ url, open, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <PopupModal
      url={url}
      onModalClose={onClose}
      open={open}
      rootElement={document.body}
    />
  );
};

export default CalendlyPopup;
