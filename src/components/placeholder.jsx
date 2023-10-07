import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    { src: '/path/to/image1.jpg', alt: 'Image 1' },
    { src: '/path/to/image2.jpg', alt: 'Image 2' },
    { src: '/path/to/image3.jpg', alt: 'Image 3' },
];

import Image from 'next/image';

function Placeholder() {
    return (
        <Carousel>
            {images.map((image) => (
                <div key={image.src}>
                    <Image src={image.src} alt={image.alt} width={1000} height={500} />
                </div>
            ))}
        </Carousel>
    );
}
