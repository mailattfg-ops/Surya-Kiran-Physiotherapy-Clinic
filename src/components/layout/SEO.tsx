import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}

export default function SEO({
    title = "Suryakiran Physiotherapy | Expert Care in Kadakkal",
    description = "Restore your mobility and quality of life with Suryakiran Physiotherapy. Expert, women-run clinic in Kadakkal specializing in orthopedic, pediatric, and sports rehabilitation.",
    keywords = "physiotherapy kadakkal, physical therapy kollam, orthopedic rehabilitation, pain management, residential rehab kerala",
    canonical = "https://Suryakiranpathways.com",
    ogImage = "/og-image.jpg"
}: SEOProps) {
    const fullTitle = title.includes("Suryakiran") ? title : `${title} | Suryakiran Physiotherapy`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Helmet>
    );
}
