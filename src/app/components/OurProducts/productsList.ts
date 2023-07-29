
import Grekompost from '@/assets/grekompost.svg';
import Pavers from '@/assets/pavers.svg';
import RecyclableMaterials from '@/assets/recyclable-materials.svg';



export const products :  {productName: string; description: string; image: string}[] = [
    {
        productName:'Grekompost',
        description: 'Fine textured, packaged compost with known chemical composition used to improve  soil fertility and productivity.',
        image: Grekompost
    },
    {
        productName:'Pavers',
        description: 'Crafted with cutting-edge technology, our Pavers are construction materials which are a fusion of sand and plastic materials, working harmoniously as exceptional cementing agents. This unique blend ensures unparalleled durability and strength, making them stand the test of time in any weather condition.',
        image:Pavers
    },
    {
        productName:'Recyclables materials',
        description: 'Discover the power of our Eco-friendly Recyclables! Meticulously sorted and compressed, our recyclable materials are made of plastics, papers, metals, cupboards, and old bags, all ready to be sold to recycling companies.',
        image:RecyclableMaterials
    },
]