import Card from '../Card/Card';

export default function DownCards() {
    const cards = [
        // need to big
        {
            imageSrc: '/lower_repeat_med.png',
            overlayText: ['The Covid-19 Epidemic In 2022 Is Back','20 Apr'],
            altText: 'Image 1',
            width: 300,
            height: 350,
        },
        // need to small
        {
            imageSrc: '/lower_repeat_med.png',
            overlayText: ['The Covid-19 Epidemic In 2022 Is Back','20 Apr'],
            altText: 'Image 2',
            width: 300,
            height: 350,
            //marginTop: 200, // Adds 20px margin from the top
        },
        // need to big
        {
            imageSrc: '/lower_repeat_med.png',
            overlayText: ['The Covid-19 Epidemic In 2022 Is Back','20 Apr'],
            altText: 'Image 3',
            width: 300,
            height: 350,
        },
        // need to small
        {
            imageSrc: '/lower_repeat_med.png',
            overlayText: ['The Covid-19 Epidemic In 2022 Is Back','20 Apr'],
            altText: 'Image 4',
            width: 300,
            height: 350,
        },
        // need to small
        {
            imageSrc: '/lower_repeat_hand.png',
            overlayText: ['The Covid-19 Epidemic In 2023 Is Back','20 Apr'],
            altText: 'Image 5',
            width: 300,
            height: 150,
        },
        // need to big
        {
            imageSrc: '/lower_repeat_hand.png',
            overlayText: ['The Covid-19 Epidemic In 2023 Is Back','20 Apr'],
            altText: 'Image 6',
            width: 300,
            height: 400,
        },
        // need to small
        {
            imageSrc: '/lower_repeat_hand.png',
            overlayText: ['The Covid-19 Epidemic In 2023 Is Back','20 Apr'],
            altText: 'Image 7',
            width: 300,
            height: 150,
        },
        // need to big
        {
            imageSrc: '/lower_repeat_hand.png',
            overlayText: ['The Covid-19 Epidemic In 2023 Is Back','20 Apr'],
            altText: 'Image 8',
            width: 300,
            height: 400,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    imageSrc={card.imageSrc}
                    overlayText={card.overlayText}
                    altText={card.altText}
                    width={card.width}
                    height={card.height}
                    marginTop={card.marginTop}
                />
            ))}
        </div>
    );
}
