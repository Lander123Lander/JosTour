import { useTranslation } from "react-i18next";
import { DestinationItem } from "./components/DestinationItem";
import { Madagascar } from "./components/Madagascar";
import { BiLogoFacebookSquare, BiLogoInstagram } from "react-icons/bi";

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
