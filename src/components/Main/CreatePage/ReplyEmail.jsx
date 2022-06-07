import { motion } from "framer-motion";
import { Form } from "../../Form/Form";
import Input from "../../Form/Input";
import SubmitButton from "../../Form/SubmitButton";
import * as yup from "yup";
import TextAreaEmail from "../../Form/TextAreaEmail";
import { useEmail } from "../../../contexts/EmailContext";

export default function ReplyEmail(props) {
  const { sender, content, subject, setShowSentEmail } = props;
  const { sendEmail } = useEmail();

  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    subject: yup.string().required("Subject is required"),
    content: yup.string().required("Content is required"),
  });

  const tmpReplyContent = `${content}\n --------------- send from ${sender} --------------- \n`;

  const onSubmit = async ({ email, subject, content }) => {
    try {
      await sendEmail(email, subject, content);
      setShowSentEmail("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      className="flex flex-row w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-3 py-5 rounded-lg bg-white overflow-hidden">
        <Form
          schema={schema}
          onSubmit={onSubmit}
          defaultValues={{
            email: sender,
            subject: subject,
            content: tmpReplyContent,
          }}
        >
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
    </motion.div>
  );
}
