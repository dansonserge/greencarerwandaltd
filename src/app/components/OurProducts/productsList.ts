
import Grekompost from '@/assets/grekompost.svg';
import Pavers from '@/assets/pavers.svg';
import RecyclableMaterials from '@/assets/recyclable-materials.svg';
import { ProductType } from './types';



export const products :  ProductType[] = [
    {
        productName:'Grekompost',
        description: 'Fine textured, packaged compost with known chemical composition used to improve  soil fertility and productivity.',
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