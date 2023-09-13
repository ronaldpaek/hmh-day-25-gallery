const API =
  "https://raw.githubusercontent.com/maxdhs/harvard-art-api/main/main.json";

export const fetchPaintings = async () => {
  try {
    const response = await fetch(API);

    if (!response.ok) throw new Error("Something went wrong");

    const data = await response.json();
    const { records } = data;
    const recordsWithImages = records.filter(
      (record) => record.images.length > 0
    );

    return recordsWithImages;
  } catch (error) {
    console.error(error);
  }
};

export const extractMuseumName = (creditline) => creditline.split(",")[0];
