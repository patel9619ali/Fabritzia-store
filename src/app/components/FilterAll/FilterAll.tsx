'use client';
import CollectionsFilter from './CollectionsFilter';

type Props = {
    collectionsProducts:any
  }
export function FilterAll({collectionsProducts}:Props) {
    return (
        <>
          <CollectionsFilter collectionsProducts={collectionsProducts}/>
        </>
      );
}
      
