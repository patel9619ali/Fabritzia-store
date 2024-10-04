'use client';
import CollectionsFilter from './CollectionsFilter';

type Props = {
    collectionsProducts:any
  }
export function FilterAll({collectionsProducts}:Props) {
  console.log(collectionsProducts,"collectionsProducts")
    return (
        <>
          <CollectionsFilter collectionsProducts={collectionsProducts}/>
        </>
      );
}
      
