import Link from "next/link";
import type { TFooter } from "@/types";
import { Logo } from "@/components/custom/logo";

const styles = {
  footer: "dark bg-gray-900 text-white py-8",
  container:
    "container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between",
  text: "mt-4 md:mt-0 text-sm text-gray-300",
  socialContainer: "flex items-center space-x-4",
  socialLink: "text-white hover:text-gray-300",
  icon: "h-6 w-6",
  srOnly: "sr-only",
};

function selectSocialIcon(url: string) {
  if (url.includes("youtube")) return <YoutubeIcon className={styles.icon} />;
  if (url.includes("facebook")) return <FacebookIcon className={styles.icon} />;
  if (url.includes("github")) return <GithubIcon className={styles.icon} />;
  return null;
}

interface IFooterProps {
  data?: TFooter | null;
}

export function Footer({ data }: IFooterProps) {
  if (!data) return null;
  const { logoText, socialLink, text } = data;
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Logo dark text={logoText.text} />
        <p className={styles.text}>{text}</p>
        <div className={styles.socialContainer}>
          {socialLink.map((link) => {
            return (
              <Link className={styles.socialLink} href={link.url} key={link.id}>
                {selectSocialIcon(link.url)}
                <span className={styles.srOnly}>Visit us at {link.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H8.08V12h2.36v-1.64c0-2.33 1.38-3.62 3.5-3.62.7 0 1.44.12 1.44.12v2.39h-.81c-.8 0-1.05.5-1.05 1.01V12h2.57l-.41 2.97h-2.16v7.03C18.34 21.2 22 17.07 22 12.07z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
