import Card from '../Card/Card';

export default function Cards() {
  const cards = [
    {
      imageSrc: '',
      overlayText: ['INgredients','Better Ingredients','Only the best when you choose products offered on our platform high-quality ingredients for high quality products'],
      altText: 'Mountain Landscape',
    },
    {
      imageSrc: '/Vitamin_C.png',
      overlayText: ['Vitamin C', 'Vitamin C as ascorbic acid',   "See More"],
      
      altText: 'Beach Sunset',
    },
    {
      imageSrc: '/vitamin_B3.png',
      overlayText: ['Vitamin B3','Niacin for healthy gut and skin',"See More" ],
      altText: 'City Skyline',
    },
    {
      imageSrc: '/Magnesium.png',
      overlayText: ['Magnesium','Boost energy and support muscle function',"See More"],
      altText: 'Forest Pathway',
    },
    {
      imageSrc: '/Hyaluronic Acid.png',
      overlayText: ['Hyaluronic Acid','For smooth, supple and soft skin',"See More"],
      altText: '',
    },{
        imageSrc: '/Lactobacillus.png',
        overlayText: ['Lactobacillus','Invigorate your gut microbiome',"See More"],
        altText: 'Desert Highway',
      }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          overlayText={card.overlayText}
          altText={card.altText}
        />
      ))}
    </div>
  );
}
