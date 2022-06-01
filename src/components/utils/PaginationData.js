export default function PaginationData(elPerPage, allData) {
  const perChunk = elPerPage; // items per page

  const result = allData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new page
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return result;
}
