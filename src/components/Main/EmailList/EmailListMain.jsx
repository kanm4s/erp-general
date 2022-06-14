import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../../../contexts/EmailContext";
import Pagination from "../../utils/Pagination";
import ReplyEmail from "../CreatePage/ReplyEmail";

// import TaskElement from "./TaskElement";
import EmailElement from "./EmailElement";
// import TaskDetail from "./TaskDetail";

export default function EmailListMain() {
  const { emails, loading } = useEmail();
  const navigate = useNavigate();

  const [showSentEmail, setShowSentEmail] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [emailsPerPage] = useState(9);

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = emails.slice(indexOfFirstEmail, indexOfLastEmail);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowDetail = (id) => {
    if (showSentEmail === "") {
      setShowSentEmail(id);
    } else {
      setShowSentEmail("");
    }
  };

  return (
    <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white dark:bg-gray-700  overflow-hidden">
      {/* Header */}
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div className="container relative right-1 grid grid-cols-4 py-[8px] 2xl:py-[18px]">
          <span className="flex dark:text-gray-200 text-zinc-400">Name</span>
          <span className="flex dark:text-gray-200 text-zinc-400">Subject</span>
        </div>
        <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
          <div className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700  transition-all rounded">
            <HiOutlineFilter className="cursor-pointer" />
          </div>
        </span>
      </div>

      {/* all employees element */}
      {loading && <h2>loading ...</h2>}
      {showSentEmail
        ? currentEmails
            .filter((element) => {
              if (showSentEmail) {
                return element.id === showSentEmail;
              } else {
                return "";
              }
            })
            .map((ele, idx) => (
              <div>
                <EmailElement
                  key={idx}
                  id={ele.id}
                  sender={ele.senderEmailBox.firstName}
                  subject={ele.subject}
                  content={ele.content}
                  handleShowDetail={handleShowDetail}
                />
                <ReplyEmail
                  sender={ele.senderEmailBox.email}
                  content={ele.content}
                  subject={ele.subject}
                  setShowSentEmail={setShowSentEmail}
                />
              </div>
            ))
        : currentEmails.map((ele, idx) => (
            <EmailElement
              key={idx}
              id={ele.id}
              sender={ele.senderEmailBox.firstName}
              subject={ele.subject}
              content={ele.content}
              handleShowDetail={handleShowDetail}
            />
          ))}
      {/* {showDetail && } */}

      {/* pagination */}
      {!showSentEmail ? (
        <div className="flex justify-between items-center p-1 mt-2 mr-1">
          <div
            className="p-1 hover:bg-slate-300 text-slate-500 hover:text-slate-50 dark:text-gray-50 dark:hover:text-gray-700 transition-all rounded cursor-pointer"
            onClick={() => {
              navigate("/MailBox/createEmail");
            }}
          >
            <IoCreateOutline className="text-lg" />
          </div>
          <Pagination
            itemsPerPage={emailsPerPage}
            totalItems={emails.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
