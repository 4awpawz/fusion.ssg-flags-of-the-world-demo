interface Flag {
    "id": number, "countryName": string, "alpha2": string, "alpha3": string, "img": string
}

interface Props {
    flags: Flag[]
}

export const Countries = function({ flags }: Props) {
    return (
        <ul>
            {flags.map(flag => {
                const src = `media/flags/${flag.img}`;
                return <li style="list-style: none;">
                    <span>
                        <a href={flag.countryName}>{flag.countryName}</a> <img src={src} alt={flag.countryName} style="width: 32px; height: 32px;" />
                    </span>
                </li>;
            })}
        </ul>
    );
};
