import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  const PDF_URL = "/mathan_s_Resume.pdf";
  const Image_URL = "/mathan_s_Resume.jpg";

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full rounded-xl  bg-white dark:bg-black/50 p-3 overflow-hidden">
      {/* Actions */}
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <a
          href={Image_URL}
          target="_blank"
          className="rounded-md border bg-white/80 p-1 hover:scale-95 dark:bg-black/70"
        >
          <ExternalLink className="h-4 w-4" />
        </a>

        <a
          href={PDF_URL}
          download
          className="rounded-md border bg-white/80 p-1 hover:scale-95 dark:bg-black/70"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>

      {/* Resume Preview */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* Skeleton Loader */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10" />
          </div>
        )}

        {/* Image */}
        <img
          src={Image_URL}
          onLoad={() => setLoaded(true)}
          alt="Resume Preview"
          className={`h-full w-full object-contain transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
