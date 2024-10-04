'use client';
import {FilterMobileView} from './FilterMobileView'
import CollectionsFilter from './CollectionsFilter';

type Props = {
    collectionsProducts:any
  }
export function FilterAll({collectionsProducts}:Props) {
    return (
        <>
          <FilterMobileView className="d-lg-none d-flex justify-content-around position-fixed bottom-0 py-3" collectionsProducts={collectionsProducts}/>
          <CollectionsFilter className="d-lg-block d-none" collectionsProducts={collectionsProducts}/>
        </>
      );
}
      
