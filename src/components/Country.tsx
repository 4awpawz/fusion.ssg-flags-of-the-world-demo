interface Flag {
    "id": number, "countryName": string, "alpha2": string, "alpha3": string, "img": string
}

interface Props {
    flags: Flag[],
    index: number
}

export const Country = function({ index, flags }: Props): { content: unknown, title: string, htmlDocumentName: string } | undefined {
    if (index === flags.length) return;
    const countryName = flags[index].countryName;
    const src = `../media/flags/${flags[index].img}`;
    const content = (
        <section class="container">
            <hgroup>
                <h1>{countryName}</h1>
                <img src={src} alt={flags[index].countryName} style="width: 128px; height: 128px;" />
            </hgroup>
            <a href="/">back</a>
        </section>
    );
    return { content, title: flags[index].countryName, htmlDocumentName: flags[index].countryName };
};
