export default function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="py-1 px-3 cursor-pointer hover:bg-slate-300 hover:text-slate-50 transition-all rounded mx-1"
            onClick={() => paginate(number)}
          >
            <div>{number}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
