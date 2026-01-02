import { useTranslation } from "react-i18next";
import { Madagascar } from "./components/Madagascar";
import {
    BiHeart,
    BiLogoFacebookSquare,
    BiLogoInstagram,
    BiMap,
    BiTrip,
} from "react-icons/bi";
import Gallery from "./components/Gallery";
import { BsStarFill } from "react-icons/bs";

function App() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const lng = i18n.language === "fr" ? "en" : "fr";
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-green-50 text-gray-900">
                {/* Nav */}
                <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 border-b border-green-100 shadow-sm">
                    <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:translate-y-[-2px]"
                            >
                                {t("nav.home")}
                            </a>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:translate-y-[-2px]"
                            >
                                {t("nav.about")}
                            </a>
                            <a
                                href="#gallery"
                                className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:translate-y-[-2px]"
                            >
                                {t("nav.gallery")}
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:translate-y-[-2px]"
                            >
                                {t("nav.contact")}
                            </a>
                        </div>
                        <button
                            onClick={toggleLanguage}
                            className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            {i18n.language === "fr" ? "FR" : "EN"}
                        </button>
                    </div>
                </nav>

                {/* Hero */}
                <section
                    id="hero"
                    className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden scroll-mt-16"
                >
                    <img
                        src="../assets/images/hero.png"
                        alt="Madagascar"
                        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                    <div className="relative z-10 max-w-4xl px-6 space-y-6">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-2xl animate-[fadeIn_1s_ease-out]">
                            {t("hero.title")}
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl font-light drop-shadow-lg max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out_0.3s_both]">
                            {t("hero.subtitle")}
                        </p>
                        <a
                            href="#about"
                            className="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-[fadeIn_1s_ease-out_0.6s_both]"
                        >
                            {t("hero.button")}
                        </a>
                    </div>

                    <a href="#about" className="absolute bottom-8 animate-bounce cursor-default">
                        <svg
                            className="w-8 h-8 text-white/80"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </section>

                {/* About */}
                <section
                    id="about"
                    className="w-full py-24 px-6 scroll-mt-16 bg-white"
                >
                    <div className="max-w-6xl mx-auto flex flex-col gap-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative group order-2 md:order-1">
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                                <img
                                    src="/public/assets/images/jocelyn.jpg"
                                    alt="Jocelyn"
                                    className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500"
                                />
                            </div>

                            <div className="space-y-6 order-1 md:order-2">
                                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                    {t("nav.about")}
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    {t("about.greeting")}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    {t("about.description_who")}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
                                <BiTrip className="text-green-500 text-2xl" />
                                {t("about.title_travel")}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                {t("about.description_travel")}
                            </p>
                        </div>

                        <div>
                            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
                                <BiMap className="text-green-500 text-2xl" />
                                {t("about.title_experience")}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                {t("about.description_experience")}
                            </p>
                        </div>

                        <div>
                            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
                                <BiHeart className="text-green-500 text-2xl" />
                                {t("about.title_madagascar")}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                {t("about.description_madagascar")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section
                    id="gallery"
                    className="w-full py-24 px-6 scroll-mt-16 bg-gradient-to-b from-white to-green-50"
                >
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                {t("nav.gallery")}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                {t("gallery.title")}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {t("gallery.description")}
                            </p>
                        </div>

                        <Gallery />

                        <div className="flex justify-center">
                            <a
                                href="https://www.instagram.com/jocelyn_tours_mada/"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-4 px-8 font-semibold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
                            >
                                <BiLogoInstagram size={28} />
                                <span>{t("gallery.instagram")}</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section
                    id="contact"
                    className="w-full py-24 px-6 scroll-mt-16 bg-white"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
                                        {t("nav.contact")}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                        {t("contact.title")}
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                                        <strong className="text-sm text-green-700 uppercase tracking-wide block mb-2">
                                            {t("contact.email")}
                                        </strong>
                                        <a
                                            href="mailto:zjocelyn43@gmail.com"
                                            className="text-xl text-gray-900 hover:text-green-600 transition-colors font-medium"
                                        >
                                            zjocelyn43@gmail.com
                                        </a>
                                    </div>

                                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                                        <strong className="text-sm text-green-700 uppercase tracking-wide block mb-2">
                                            {t("contact.whatsapp")}
                                        </strong>
                                        <a
                                            href="tel:+261340478241"
                                            className="text-xl text-gray-900 hover:text-green-600 transition-colors font-medium"
                                        >
                                            +261 34 04 782 41
                                        </a>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href="https://www.facebook.com/100054303979060"
                                            aria-label="Facebook"
                                            className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-xl hover:scale-110 transition-all duration-300"
                                        >
                                            <BiLogoFacebookSquare size={32} />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/jocelyn_tours_mada/"
                                            aria-label="Instagram"
                                            className="p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl hover:shadow-xl hover:scale-110 transition-all duration-300"
                                        >
                                            <BiLogoInstagram size={32} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="justify-center hidden md:flex">
                                <Madagascar
                                    className="w-full max-w-md hover:scale-105 transition-transform duration-500"
                                    fill="#111827"
                                    stroke="#1F2937"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="reviews"
                    className="w-full py-24 px-6 scroll-mt-16 bg-gradient-to-b from-white to-green-50"
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white/80 border border-green-100 rounded-2xl shadow-lg p-8 md:p-10 scale-100 hover:scale-[1.01] transition-transform duration-500">

                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <BsStarFill key={i} className="w-5 h-5" />
                                ))}
                            </div>
                            <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                                “{t("reviews.dirix_family.text")}”
                            </p>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">
                                        {t("reviews.dirix_family.name")}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {t("reviews.dirix_family.location")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="font-bold text-2xl text-white mb-6">
                                    {t("nav.quickLinks")}
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-green-400 transition-colors text-lg"
                                        >
                                            {t("nav.home")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="hover:text-green-400 transition-colors text-lg"
                                        >
                                            {t("nav.about")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#gallery"
                                            className="hover:text-green-400 transition-colors text-lg"
                                        >
                                            {t("nav.gallery")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className="hover:text-green-400 transition-colors text-lg"
                                        >
                                            {t("nav.contact")}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-2xl text-white mb-6">
                                    {t("contact.title")}
                                </h3>
                                <div className="space-y-3 text-lg">
                                    <p>
                                        <span className="text-gray-400">
                                            {t("contact.email")}:
                                        </span>{" "}
                                        <a
                                            href="mailto:zjocelyn43@gmail.com"
                                            className="text-green-400 hover:text-green-300 transition-colors"
                                        >
                                            zjocelyn43@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">
                                            {t("contact.whatsapp")}:
                                        </span>{" "}
                                        <a
                                            href="tel:+261340478241"
                                            className="text-green-400 hover:text-green-300 transition-colors"
                                        >
                                            +261 34 04 782 41
                                        </a>
                                    </p>

                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href="https://www.facebook.com/100054303979060"
                                            aria-label="Facebook"
                                            className="text-gray-400 hover:text-green-400 transition-colors"
                                        >
                                            <BiLogoFacebookSquare size={36} />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/jocelyn_tours_mada/"
                                            aria-label="Instagram"
                                            className="text-gray-400 hover:text-green-400 transition-colors"
                                        >
                                            <BiLogoInstagram size={36} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-700 text-center">
                            <p className="text-gray-400">
                                © {new Date().getFullYear()} {t("author.name")}.{" "}
                                {t("author.rights")}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale {
                    0%, 100% { transform: scale(1.05); }
                    50% { transform: scale(1.1); }
                }
            `}</style>
        </>
    );
}

export default App;
