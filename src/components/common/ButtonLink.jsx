export default function ButtonLink({ variant = "primary", href, children, ...props }) { return <a className={`button-link button-${variant}`} href={href} {...props}>{children}</a>; }
