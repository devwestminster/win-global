import Link from "next/link";
import styles from "./action-link.module.css";

type ActionLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ActionLink({
  children,
  href,
  variant = "primary",
  className = "",
}: ActionLinkProps) {
  const classes = [styles.action, styles[variant], className].filter(Boolean).join(" ");

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
