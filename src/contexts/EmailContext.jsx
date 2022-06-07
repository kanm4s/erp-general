import { createContext, useContext, useEffect, useState } from "react";
import {
  deleteEmailApi,
  getEmailByUserApi,
  sendEmailApi,
} from "../api/communicate";

const EmailContext = createContext();

function EmailContextProvider(props) {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmail = async () => {
    try {
      setLoading(true);
      const res = await getEmailByUserApi();
      setEmails(res.data.emails);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  const sendEmail = async (emailAddress, subject, content) => {
    try {
      await sendEmailApi(emailAddress, subject, content);
      fetchEmail();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmail = async (id) => {
    try {
      await deleteEmailApi(id);
      await fetchEmail();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EmailContext.Provider value={{ emails, loading, sendEmail, deleteEmail }}>
      {props.children}
    </EmailContext.Provider>
  );
}

const useEmail = () => {
  const ctx = useContext(EmailContext);
  return ctx;
};

export { EmailContextProvider, useEmail, EmailContext };
