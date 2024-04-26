import styles from "./Icons.module.css";

export function Flame() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icons}
      viewBox="0 0 512 512"
    >
      <path
        d="M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 01-288 0z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

export function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icons}
      viewBox="0 0 512 512"
    >
      <path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

export function Restaurant() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icons}
      viewBox="0 0 512 512"
    >
      <path
        d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

export function CheckMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.checkmark}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 128L192 384l-96-96"
      />
    </svg>
  );
}

export function Close() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.checkmark}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}

export function Infinite() {
  return (
    <div className={styles.div}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.features}
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
}

export function Leaf() {
  return (
    <div className={styles.div}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.features}
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
}

export function Nutrition() {
  return (
    <div className={styles.div}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.features}
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="currentColor"
          d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 01-9.1-8.73 97.6 97.6 0 0128.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 018.67 8.92 98 98 0 01-28.08 58.2z"
        />
        <ellipse fill="currentColor" cx="216" cy="304" rx="24" ry="48" />
        <ellipse fill="currentColor" cx="296" cy="304" rx="24" ry="48" />
      </svg>
    </div>
  );
}

export function Pause() {
  return (
    <div className={styles.div}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.features}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M176 96h16v320h-16zM320 96h16v320h-16z"
        />
      </svg>
    </div>
  );
}

export function Twitter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.socials}
      viewBox="0 0 512 512"
    >
      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
    </svg>
  );
}

export function Instagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.socials}
      viewBox="0 0 512 512"
    >
      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
  );
}

export function Facebook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.socials}
      viewBox="0 0 512 512"
    >
      <path
        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.menu}
      viewBox="0 0 512 512"
    >
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );
}

export function NavClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.navIcons}
      viewBox="0 0 512 512"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}
