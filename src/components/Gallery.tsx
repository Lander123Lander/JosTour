import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
type ImageModule = {
    default: string;
};

const images: Record<string, ImageModule> = import.meta.glob<ImageModule>(
    "/public/assets/images/madagascar/*.{jpeg,jpg}",
    { eager: true }
);

export default function Gallery() {
    const { t } = useTranslation();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const allImages = Object.values(images);
    const [visibleCount, setVisibleCount] = useState(10);

    const showMore = () => {
        setVisibleCount((count) => count + 10);
    };

    const openAt = (index: number) => setSelectedIndex(index);
    const close = () => setSelectedIndex(null);

    const showPrev = () =>
        setSelectedIndex((i) =>
            i === null ? i : (i - 1 + allImages.length) % allImages.length
        );

    const showNext = () =>
        setSelectedIndex((i) => (i === null ? i : (i + 1) % allImages.length));

    return (
        <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-8">
            <div className="w-full columns-2 md:columns-3 gap-2 space-y-2">
                {allImages.slice(0, visibleCount).map((img, idx) => (
                    <img
                        key={idx}
                        src={img.default}
                        alt={`Madagascar ${idx + 1}`}
                        loading="lazy"
                        className="w-full object-contain block cursor-pointer"
                        onClick={() => openAt(idx)}
                    />
                ))}
            </div>

            {visibleCount < allImages.length && (
                <button
                    onClick={showMore}
                    className="underline text-gray-600 hover:text-gray-900 font-bold rounded  cursor-pointer transition-colors"
                >
                    <span>{t("gallery.more")}</span>
                </button>
            )}

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={close}
                >
                    <button
                        type="button"
                        className="flex justify-center items-center absolute right-4 md:right-8 w-10 aspect-square text-white text-3xl md:text-4xl bg-black/50 rounded-lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                    >
                        <BiChevronLeft />
                    </button>
                    <img
                        src={allImages[selectedIndex].default}
                        alt={`Madagascar ${selectedIndex + 1}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        type="button"
                        className="flex justify-center items-center absolute right-4 md:right-8 w-10 aspect-square text-white text-3xl md:text-4xl bg-black/50 rounded-lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                    >
                        <BiChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
}
