import { useState } from "react";
import { Madagascar } from "./Madagascar";

export function MadagascarProvinces() {
    const [selectedArea, setSelectedArea] = useState<string | undefined>(
        undefined
    );

    return (
        <div className="relative w-full max-w-[1000px] mx-auto grid grid-cols-2">
            <Madagascar
                fill="#888"
                hoverFill="#bbb"
                selectedFill="#aaa"
                onClick={(area) => selectedArea == area ? setSelectedArea(undefined) : setSelectedArea(area)}
                selected={selectedArea}
            />
            {selectedArea == "Mahajanga" ? (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">Mahajanga</h3>
                    <p>
                        Northwest province with beautiful coastlines, baobab
                        trees, and vibrant fishing communities.
                    </p>
                </div>
            ) : selectedArea == "Antsiranana" ? (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">
                        Antsiranana (Diego Suarez)
                    </h3>
                    <p>
                        A tropical paradise in the north, known for stunning
                        beaches, lush rainforests, and the famous Amber Mountain
                        National Park.
                    </p>
                </div>
            ) : selectedArea == "Toamasina" ? (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">
                        Toamasina (Tamatave)
                    </h3>
                    <p>
                        The eastern port province, rich in rainforest
                        biodiversity and famous for its bustling trade and
                        scenic coastline.
                    </p>
                </div>
            ) : selectedArea == "Fianarantsoa" ? (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">Fianarantsoa</h3>
                    <p>
                        South-central province, famous for tea plantations,
                        vineyards, and scenic mountainous landscapes.
                    </p>
                </div>
            ) : selectedArea == "Toliara" ? (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">Toliara (Tuléar)</h3>
                    <p>
                        Southwest province, known for its dry spiny forests,
                        coral reefs, and the iconic Avenue of the Baobabs.
                    </p>
                </div>
            ) : selectedArea == "Antananarivo" ? (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">Antananarivo</h3>
                    <p>
                        The central highlands province, home to the capital
                        city, historic sites, and terraced rice fields.
                    </p>
                </div>
            ) : (
                <div className="bg-gray-100 bg-opacity-90 p-2 rounded shadow">
                    <h3 className="font-semibold text-xl">Madagascar</h3>
                </div>
            )}
        </div>
    );
}
