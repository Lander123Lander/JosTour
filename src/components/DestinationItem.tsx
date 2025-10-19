type DestinationItemProps = {
    src: string;
    text: string;
};

export function DestinationItem({ src, text }: DestinationItemProps) {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <img
                src={src}
                alt={text}
                className="w-full h-48 object-cover"
            />
            <h3 className="font-bold mt-2">{text}</h3>
        </div>
    );
}
