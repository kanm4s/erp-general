import { motion } from "framer-motion";
import { Form } from "../../Form/Form";
import Input from "../../Form/Input";
import SubmitButton from "../../Form/SubmitButton";
import * as yup from "yup";

export default function ProjectCreate() {
  const schema = yup.object().shape({
    projectname: yup
      .string()
      .required("name is required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "not match"),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <motion.main
      className="relative flex flex-col px-56 h-screen grow gap-1 bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-6">
        Create Project
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
        <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
          <Form schema={schema}>
            <Input name="projectname" />
            <SubmitButton onClick={onSubmit}>comfirm</SubmitButton>
          </Form>
          {/* <form>
            <label htmlFor="projectName">Name</label>
            <input type="text" name="projectName" />
          </form> */}
        </div>
      </div>
    </motion.main>
  );
}
