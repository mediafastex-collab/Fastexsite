import { logoSize, LOGO_BOX } from "@/data/clients";

/**
 * One client's logo, sized by the shared area rule inside a fixed box so a
 * row of them reads as one size. Founders get a round portrait the height of
 * the box instead of a logo.
 */
export default function ClientMark({ client, className = "" }) {
  const src = `/assets/clients/${client.logo}`;

  if (client.kind === "founder") {
    return (
      <span className={`client-mark client-mark--founder ${className}`}>
        <img
          src={src}
          alt={client.name}
          width={LOGO_BOX.h}
          height={LOGO_BOX.h}
          loading="lazy"
          decoding="async"
        />
      </span>
    );
  }

  return (
    <span className={`client-mark client-mark--${client.kind} ${className}`}>
      <img
        src={src}
        alt={`${client.name} logo`}
        {...logoSize(client)}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
