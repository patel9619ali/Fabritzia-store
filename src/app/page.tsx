import Image from 'next/image';
import { fetchShopifyCollections } from '../app/api/fetchCollection';
import { createSlug } from '../app/utils/createSlug';
import Link from 'next/link';
export default async function Home() {
  const collections = await fetchShopifyCollections();
  
  return (
    <>
      {collections.map((collection: any) => {
        const slug = createSlug(collection.title);
        return (
        <Link href={`collections/${slug}`} key={collection.id}>
          <Image key={collection.image.id} className="img-fluid w-100" src={collection.image.src} alt={collection.title || 'Collection Image'} width={collection.image.width} height={collection.image.height}/>
        </Link>
        );
      })}
    </>
  );
}