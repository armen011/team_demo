const encodeImageFileAsURL = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const srting = reader.result as string;
      resolve(srting);
    };
    reader.readAsDataURL(file);
  });
};

export default encodeImageFileAsURL;

