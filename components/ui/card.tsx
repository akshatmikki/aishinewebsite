import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-neutral-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return <div className={`p-4 border-b border-zinc-100 dark:border-zinc-800 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>;
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
