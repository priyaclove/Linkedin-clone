// Central place for the backend base URL. Override in production by setting
// NEXT_PUBLIC_API_URL in an .env.local file. Defaults to the local Express server.

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mpegs-petersburg-preservation-josh.trycloudflare.com";

export const getImageUrl = (image? : string | null, fallback? : string) => {

    if (!image) {

        return fallback || "";

    }

    if (image.startsWith("http://") || image.startsWith("https://")) {

        return image;

    }

    return `${API_URL}${image}`;

};
