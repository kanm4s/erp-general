import { v4 as uuidv4 } from "uuid";

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
            key={uuidv4()}
            className="py-1 px-3 cursor-pointer hover:bg-slate-300 hover:text-slate-50 dark:text-slate-50 dark:hover:text-slate-700 transition-all rounded mx-1"
            onClick={() => paginate(number)}
          >
            <div>{number}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
