import { useState } from "react";
import { Madagascar } from "./Madagascar";

export function MadagascarPOIs() {
    const [selectedArea, setSelectedArea] = useState<string>("Antananarivo");

    return (
        <div className="relative w-[50%] aspect-[2/3]">
            <Madagascar
                fill="#888"
                hoverFill="#bbb"
                selectedFill="#aaa"
                onClick={setSelectedArea}
                selected={selectedArea}
            />
            <div>
                Discover Madagascar — The Island of Endless Wonders Madagascar,
                the world’s fourth-largest island, is a land unlike any other.
                Separated from mainland Africa for over 80 million years, it has
                evolved into a living museum of natural history — a place where
                90% of its wildlife exists nowhere else on Earth. From lush
                rainforests and arid deserts to pristine beaches and coral
                reefs, Madagascar offers a breathtaking journey through an
                astonishing variety of landscapes and life. A Land of Contrasts
                Madagascar’s beauty lies in its diversity. The island’s eastern
                coast is draped in dense tropical rainforests filled with the
                sounds of chattering lemurs and exotic birds. Travel westward,
                and you’ll find dry deciduous forests and sweeping savannas
                dotted with towering baobabs. In the south, spiny deserts
                stretch beneath endless skies, while the north glows with
                volcanic peaks and emerald bays. Each region feels like a world
                of its own — yet all are united by the warmth of Malagasy
                culture and the island’s unmistakable rhythm of life. Unique
                Fauna and Flora Home to over 100 species of lemurs, Madagascar
                is a paradise for wildlife enthusiasts. The mischievous
                ring-tailed lemur, the elusive aye-aye, and the graceful sifaka
                are just a few of the island’s remarkable inhabitants. Bird
                lovers can marvel at the Madagascar fish eagle and the colorful
                vangas, while reptile enthusiasts will find an astonishing
                variety of chameleons — some so small they can perch on the tip
                of a matchstick. The flora is equally mesmerizing. The island’s
                legendary baobab trees, with their enormous trunks and whimsical
                silhouettes, are a symbol of resilience and beauty. Orchids
                bloom in hidden valleys, while the spiny forests of the south
                harbor plant species found nowhere else on Earth. Must-Visit
                Locations Avenue of the Baobabs (Morondava) Perhaps the most
                iconic landscape in Madagascar, this natural monument features
                centuries-old baobab trees rising dramatically from the red
                earth. Sunset here paints the sky in gold and amber, creating
                one of the most unforgettable sights on the island.
                Andasibe-Mantadia National Park Just a few hours from the
                capital, Antananarivo, this lush rainforest is home to the
                famous indri indri — the largest living lemur. Its haunting
                calls echo through the misty canopy, creating a magical
                atmosphere for those exploring the park’s trails. Isalo National
                Park Located in the central highlands, Isalo is a wonder of
                sandstone canyons, natural pools, and hidden oases. It’s often
                compared to a miniature Grand Canyon, with breathtaking views,
                dramatic cliffs, and a surprising diversity of life adapted to
                its dry environment. Nosy Be and the Northern Islands In the far
                north, the islands of Nosy Be, Nosy Komba, and Nosy Tanikely
                offer turquoise waters, coral reefs teeming with marine life,
                and a relaxed tropical lifestyle. Whether diving among sea
                turtles or savoring fresh seafood by the beach, visitors find
                serenity in every wave. Fort Dauphin (Tolagnaro) Set between
                mountains, rainforest, and sea, this southeastern gem combines
                natural beauty with a glimpse into local Malagasy life. Its
                nearby reserves, such as Berenty, offer close encounters with
                lemurs in a peaceful, sun-drenched landscape. Life and Culture
                Beyond its natural wonders, Madagascar thrives with vibrant
                traditions and warm hospitality. Villages are rich with song,
                dance, and ancestral customs, while local markets burst with
                color and fragrance — from fresh vanilla and cloves to handwoven
                crafts and carved zebu horn art. Malagasy cuisine, shaped by
                African, Asian, and French influences, is a journey in itself,
                offering flavors both comforting and exotic. Experience
                Madagascar Madagascar is not just a destination — it’s a
                discovery. It’s waking to the sound of indris in the mist,
                walking beneath ancient baobabs at sunset, and meeting
                communities whose lives are deeply intertwined with the rhythms
                of nature. Every step on this island tells a story millions of
                years in the making — a story of isolation, evolution, and
                enduring beauty. Come explore the wild heart of the Indian
                Ocean. Madagascar awaits.
            </div>
        </div>
    );
}
