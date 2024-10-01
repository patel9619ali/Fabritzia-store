export const createTitleFromSlug = (title: string): string => {
    const slugifiedTitle = title
      .toUpperCase()
      .replace(/-/g, ' ');     // Replace spaces with -
    //   .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    //   .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    //   .replace(/^-+|-+$/g, '');   // Trim - from start and end
    // const handleId = id.split('/').pop();
    return `${slugifiedTitle}`;  // Append id to ensure uniqueness
  };
  