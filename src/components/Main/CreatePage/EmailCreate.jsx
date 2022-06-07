import { motion } from "framer-motion";
import { Form } from "../../Form/Form";
import Input from "../../Form/Input";
import SubmitButton from "../../Form/SubmitButton";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import TextAreaEmail from "../../Form/TextAreaEmail";
import { useEmail } from "../../../contexts/EmailContext";

export default function EmailCreate() {
  const navigate = useNavigate();

  const { sendEmail } = useEmail();

  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    subject: yup.string().required("Subject is required"),
    content: yup.string().required("Content is required"),
  });

  const onSubmit = async ({ email, subject, content }) => {
    try {
      await sendEmail(email, subject, content);
      navigate("/MailBox");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.main
      className="relative flex flex-col px-56 h-screen grow gap-1 bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-6">
        Create Email
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
        <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
          <Form schema={schema} onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 border-b-2 border-slate-300 border-dashed pb-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input name="email" type="text" />
                  <span></span>
                  <Input name="subject" type="text" />
                </div>
              </div>
              <div className="h-fit rounded border-2 border-slate-300 border-dashed">
                <TextAreaEmail name="content" type="text" />
              </div>
              <SubmitButton>comfirm</SubmitButton>
            </div>
          </Form>
        </div>
      </div>
    </motion.main>
  );
}
