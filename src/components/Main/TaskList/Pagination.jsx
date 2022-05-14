import { useState } from "react";

export default function Pagination(props) {
    const [pages, setPages] = useState([...Array(props.pageNumber).keys()]);
    return (
        <div className="flex justify-end p-1 mt-2 mr-1">
            {pages.map((ele, idx) => {
                return (
                    <span className="py-1 px-3 cursor-pointer hover:bg-slate-300 hover:text-slate-50 transition-all rounded mx-1">
                        {idx + 1}
                    </span>
                );
            })}
        </div>
    );
}
