import { useTranslation } from "react-i18next";
import { DestinationItem } from "./components/DestinationItem";
import { Madagascar } from "./components/Madagascar";
import { BiLogoFacebookSquare, BiLogoInstagram } from "react-icons/bi";
import { MadagascarProvinces } from "./components/MadagascarProvinces";

function App() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const lng = i18n.language === "en" ? "fr" : "en";
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <head>
                <title>{t("hero.title")}</title>
            </head>
            <div className="w-full min-h-screen bg-white text-gray-800">
                {/* Nav */}
                <nav className="fixed w-full top-0 z-50 h-14 flex justify-center items-center text-green-600 font-semibold">
                    <div className="hidden md:flex justify-center items-center gap-2 md:gap-10 text-md md:text-xl bg-white w-full h-full shadow-lg">
                        <a
                            href="#"
                            className="hover:text-green-950 transition-colors"
                        >
                            {t("nav.home")}
                        </a>
                        <a
                            href="#about"
                            className="hover:text-green-950 transition-colors"
                        >
                            {t("nav.about")}
                        </a>
                        <a
                            href="#destinations"
                            className="hover:text-green-950 transition-colors"
                        >
                            {t("nav.destinations")}
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-green-950 transition-colors"
                        >
                            {t("nav.contact")}
                        </a>
                    </div>
                    <button
                        onClick={toggleLanguage}
                        className="flex gap-2 fixed right-3 bg-black/30 backdrop-blur-sm rounded-lg cursor-pointer"
                    >
                        <div className="px-2 py-1 rounded bg-transparent text-white hover:bg-white/20 transition-colors">
                            {i18n.language === "en" ? "EN" : "FR"}
                        </div>
                    </button>
                </nav>

                {/* Hero */}
                <section
                    id="hero"
                    className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center scroll-mt-14"
                >
                    <img
                        src="../assets/hero.png"
                        alt="Madagascar"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-6xl px-2 font-bold drop-shadow-lg">
                            {t("hero.title")}
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl px-2 drop-shadow-md max-w-[500px] mx-auto">
                            {t("hero.subtitle")}
                        </p>
                        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-400 cursor-pointer transition-colors">
                            {t("hero.button")}
                        </button>
                    </div>
                </section>

                {/* About */}
                <section
                    id="about"
                    className="w-full bg-[var(--color-bg-primary)] py-16 px-4 scroll-mt-14"
                >
                    <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img
                                src="../assets/jocelyn.png"
                                alt="Jocelyn"
                                className="rounded-lg shadow-lg w-full h-auto border"
                            />
                        </div>
                        <div className="w-full text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">
                                {t("about.greeting")}
                            </h2>
                            <p className="text-lg text-[var(--color-text-primary)] leading-relaxed">
                                {t("about.description")}
                            </p>
                        </div>
                    </div>
                </section>

                <MadagascarProvinces />

                {/* Destinations */}
                <section
                    id="destinations"
                    className="w-full bg-green-100 py-8 px-4 scroll-mt-14"
                >
                    <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-8">
                        <div className="px-2 text-center">
                            <h2 className="text-3xl font-bold">
                                {t("destinations.title")}
                            </h2>
                            <p className="mb-2">
                                {t("destinations.description")}
                            </p>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />

                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />

                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />

                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />
                            <DestinationItem src="test" text="test" />
                        </div>
                        <a
                            href="https://www.instagram.com/jocelyn_tours_mada/"
                            className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 font-bold text-lg rounded hover:bg-green-600 cursor-pointer transition-colors mx-auto"
                        >
                            <span>{t("destinations.more")}</span>
                            <BiLogoInstagram size={32} />
                        </a>
                    </div>
                </section>

                {/* Contact */}
                <section
                    id="contact"
                    className="w-full bg-white py-16 px-4 scroll-mt-14"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] justify-center items-center mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">
                                {t("contact.title")}
                            </h2>

                            <div className="flex flex-col items-center gap-4">
                                <div className="flex flex-col gap-1">
                                    <strong>{t("contact.email")}:</strong>
                                    <a
                                        href="mailto:zjocelyn43@gmail.com"
                                        className="text-green-600 hover:underline text-lg"
                                    >
                                        zjocelyn43@gmail.com
                                    </a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <strong>{t("contact.whatsapp")}:</strong>
                                    <a
                                        href="tel:+261340478241"
                                        className="text-green-600 hover:underline text-lg"
                                    >
                                        +261 34 04 782 41
                                    </a>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href="https://www.facebook.com/100054303979060"
                                        aria-label="Facebook"
                                        className="text-green-600 hover:text-black transition-colors"
                                    >
                                        <BiLogoFacebookSquare size={32} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/jocelyn_tours_mada/"
                                        aria-label="Instagram"
                                        className="text-green-600 hover:text-black transition-colors"
                                    >
                                        <BiLogoInstagram size={32} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Madagascar
                            className="w-[200px] md:w-[400px] mx-auto"
                            fill="#22c55e"
                            stroke="#22c55e"
                        />
                    </div>
                </section>

                <div>
                    Discover Madagascar — The Island of Endless Wonders
                    Madagascar, the world’s fourth-largest island, is a land
                    unlike any other. Separated from mainland Africa for over 80
                    million years, it has evolved into a living museum of
                    natural history — a place where 90% of its wildlife exists
                    nowhere else on Earth. From lush rainforests and arid
                    deserts to pristine beaches and coral reefs, Madagascar
                    offers a breathtaking journey through an astonishing variety
                    of landscapes and life. A Land of Contrasts Madagascar’s
                    beauty lies in its diversity. The island’s eastern coast is
                    draped in dense tropical rainforests filled with the sounds
                    of chattering lemurs and exotic birds. Travel westward, and
                    you’ll find dry deciduous forests and sweeping savannas
                    dotted with towering baobabs. In the south, spiny deserts
                    stretch beneath endless skies, while the north glows with
                    volcanic peaks and emerald bays. Each region feels like a
                    world of its own — yet all are united by the warmth of
                    Malagasy culture and the island’s unmistakable rhythm of
                    life. Unique Fauna and Flora Home to over 100 species of
                    lemurs, Madagascar is a paradise for wildlife enthusiasts.
                    The mischievous ring-tailed lemur, the elusive aye-aye, and
                    the graceful sifaka are just a few of the island’s
                    remarkable inhabitants. Bird lovers can marvel at the
                    Madagascar fish eagle and the colorful vangas, while reptile
                    enthusiasts will find an astonishing variety of chameleons —
                    some so small they can perch on the tip of a matchstick. The
                    flora is equally mesmerizing. The island’s legendary baobab
                    trees, with their enormous trunks and whimsical silhouettes,
                    are a symbol of resilience and beauty. Orchids bloom in
                    hidden valleys, while the spiny forests of the south harbor
                    plant species found nowhere else on Earth. Must-Visit
                    Locations Avenue of the Baobabs (Morondava) Perhaps the most
                    iconic landscape in Madagascar, this natural monument
                    features centuries-old baobab trees rising dramatically from
                    the red earth. Sunset here paints the sky in gold and amber,
                    creating one of the most unforgettable sights on the island.
                    Andasibe-Mantadia National Park Just a few hours from the
                    capital, Antananarivo, this lush rainforest is home to the
                    famous indri indri — the largest living lemur. Its haunting
                    calls echo through the misty canopy, creating a magical
                    atmosphere for those exploring the park’s trails. Isalo
                    National Park Located in the central highlands, Isalo is a
                    wonder of sandstone canyons, natural pools, and hidden
                    oases. It’s often compared to a miniature Grand Canyon, with
                    breathtaking views, dramatic cliffs, and a surprising
                    diversity of life adapted to its dry environment. Nosy Be
                    and the Northern Islands In the far north, the islands of
                    Nosy Be, Nosy Komba, and Nosy Tanikely offer turquoise
                    waters, coral reefs teeming with marine life, and a relaxed
                    tropical lifestyle. Whether diving among sea turtles or
                    savoring fresh seafood by the beach, visitors find serenity
                    in every wave. Fort Dauphin (Tolagnaro) Set between
                    mountains, rainforest, and sea, this southeastern gem
                    combines natural beauty with a glimpse into local Malagasy
                    life. Its nearby reserves, such as Berenty, offer close
                    encounters with lemurs in a peaceful, sun-drenched
                    landscape. Life and Culture Beyond its natural wonders,
                    Madagascar thrives with vibrant traditions and warm
                    hospitality. Villages are rich with song, dance, and
                    ancestral customs, while local markets burst with color and
                    fragrance — from fresh vanilla and cloves to handwoven
                    crafts and carved zebu horn art. Malagasy cuisine, shaped by
                    African, Asian, and French influences, is a journey in
                    itself, offering flavors both comforting and exotic.
                    Experience Madagascar Madagascar is not just a destination —
                    it’s a discovery. It’s waking to the sound of indris in the
                    mist, walking beneath ancient baobabs at sunset, and meeting
                    communities whose lives are deeply intertwined with the
                    rhythms of nature. Every step on this island tells a story
                    millions of years in the making — a story of isolation,
                    evolution, and enduring beauty. Come explore the wild heart
                    of the Indian Ocean. Madagascar awaits.
                </div>

                {/* Footer */}
                <footer className="w-full bg-green-600 text-white py-8 px-4">
                    <div className="max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-xl mb-3">
                                {t("nav.quickLinks")}
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:underline">
                                        {t("nav.home")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:underline"
                                    >
                                        {t("nav.about")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#destinations"
                                        className="hover:underline"
                                    >
                                        {t("nav.destinations")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="hover:underline"
                                    >
                                        {t("nav.contact")}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="font-bold text-xl mb-3">
                                {t("contact.title")}
                            </h3>
                            <p>
                                {t("contact.email")}:{" "}
                                <a
                                    href="mailto:zjocelyn43@gmail.com"
                                    className="underline"
                                >
                                    zjocelyn43@gmail.com
                                </a>
                            </p>
                            <p>
                                {t("contact.whatsapp")}:{" "}
                                <a
                                    href="tel:+261340478241"
                                    className="underline"
                                >
                                    +261 34 04 782 41
                                </a>
                            </p>

                            <div className="flex justify-center md:justify-start gap-4 mt-3">
                                <a
                                    href="https://www.facebook.com/100054303979060"
                                    aria-label="Facebook"
                                    className="hover:text-green-200 transition-colors"
                                >
                                    <BiLogoFacebookSquare size={32} />
                                </a>
                                <a
                                    href="https://www.instagram.com/jocelyn_tours_mada/"
                                    aria-label="Instagram"
                                    className="hover:text-green-200 transition-colors"
                                >
                                    <BiLogoInstagram size={32} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <p className="text-center mt-8 text-sm text-gray-300">
                        © {new Date().getFullYear()} {t("author.name")}.{" "}
                        {t("author.rights")}
                    </p>
                </footer>
            </div>
        </>
    );
}

export default App;
