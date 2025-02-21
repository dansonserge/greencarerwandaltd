
import Grekompost from '@public/assets/grekompost.svg';
import Pavers from '@public/assets/pavers.svg';
import RecyclableMaterials from '@public/assets/recyclable-materials.svg';
import { ProductType } from './types';



export const products :  ProductType[] = [
    {
        productName:'Grekompost',
        description: 'A premium, finely textured, and packaged compost with a scientifically balanced chemical composition, designed to enhance soil fertility and boost agricultural productivity. Ideal for both home gardens and large-scale farming, Grekompost supports sustainable growth while improving soil structure and nutrient availability.',
        image: Grekompost
    },
    {
        productName:'Pavers',
        description: 'Construction materials used as soil cover for parking areas, road walking alley..., will be made from sand and plastic materials acting as cementing agents.',
        image:Pavers
    },
    {
        productName:'Recyclables materials',
        description: 'Sorted and compressed recyclables materials (plastics, papers,metals ,cupboards , old bags sold to other recycling companies .',
        image:RecyclableMaterials
    },
]