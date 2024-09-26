export const createSlug = (title: string): string => {
    return title
      .toLowerCase()            
      .replace(/\s+/g, '-')     
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-')   
      .replace(/^-+|-+$/g, ''); 
  };
