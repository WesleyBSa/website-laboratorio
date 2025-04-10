export interface NavLinkProps {
  href: string;
  title: string;
  onClick: () => void;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}