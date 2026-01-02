import { useState } from "react";
import { useTranslation } from "react-i18next";

type ImageModule = {
    default: string;
};

const images: Record<string, ImageModule> = import.meta.glob<ImageModule>(
    "/src/assets/images/madagascar/*.{jpeg,jpg}",
    { eager: true }
);

export default function Gallery() {
    const { t } = useTranslation();

    const allImages = Object.values(images);
    const [visibleCount, setVisibleCount] = useState(10);

    const showMore = () => {
        setVisibleCount((count) => count + 10);
    };

    return (
        <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-8">
            <div className="w-full columns-2 md:columns-3 gap-2 space-y-2">
                
                {allImages.slice(0, visibleCount).map((img, idx) => (
                    <img
                        key={idx}
                        src={img.default}
                        alt={`Image ${idx + 1}`}
                        loading="lazy"
                        className="w-full object-contain block"
                    />
                ))}
            </div>

            {visibleCount < allImages.length && (
                <button
                    onClick={showMore}
                    className="underline text-green-500 font-bold rounded hover:text-green-600 cursor-pointer transition-colors"
                >
                    <span>{t("gallery.more")}</span>
                </button>
            )}
        </div>
    );
}
