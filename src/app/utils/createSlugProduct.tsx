export const createSlugProduct = (title: string): string => {
  const slugifiedTitle = title
    .toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    .replace(/^-+|-+$/g, '');   // Trim - from start and end
  // const handleId = id.split('/').pop();
  return `${slugifiedTitle}`;  // Append id to ensure uniqueness
};
