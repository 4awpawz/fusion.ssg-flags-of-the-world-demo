interface Flag {
    "id": number, "countryName": string, "alpha2": string, "alpha3": string, "img": string
}

interface Props {
    flags: Flag[]
}

export const Countries = function({ flags }: Props) {
    return (
        <ol>
            {flags.map(flag => {
                const src = `media/flags/${flag.img}`;
                return <li>
                    <span>
                        <a href={flag.countryName}>{flag.countryName}</a> <img class="smaller-flag" src={src} alt={flag.countryName} width="32" height="32" />
                    </span>
                </li>;
            })}
        </ol>
    );
};
