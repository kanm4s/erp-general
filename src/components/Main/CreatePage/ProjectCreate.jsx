import { motion } from "framer-motion";
import { Form } from "../../Form/Form";
import Input from "../../Form/Input";
import SubmitButton from "../../Form/SubmitButton";
import * as yup from "yup";
import TextArea from "../../Form/TextArea";
import { useProject } from "../../../contexts/ProjectContext";
import { useNavigate } from "react-router-dom";

export default function ProjectCreate() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    projectName: yup.string().required("Project name is required"),
    clientName: yup.string().required("Client name is required"),
    date: yup.date().required("Date is required"),
    brief: yup.string(),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "not match"),
  });

  const { createProject } = useProject();

  const onSubmit = async ({ projectName, clientName, date, brief }) => {
    try {
      await createProject(projectName, clientName, date, brief);
      navigate("/Projects");
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
        Create Project
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
        <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
          <div className="grid grid-cols-2">
            <Form schema={schema}>
              <div className="flex flex-col gap-3">
                <div>
                  <Input name="projectName" type="text" />
                </div>
                <div>
                  <Input name="clientName" type="text" />
                </div>
                <div>
                  <Input name="date" type="date" />
                </div>
                <div>
                  <TextArea name="brief" type="text" />
                </div>
                <SubmitButton onClick={onSubmit}>comfirm</SubmitButton>
              </div>
            </Form>
          </div>
          {/* <form>
            <label htmlFor="projectName">Name</label>
            <input type="text" name="projectName" />
          </form> */}
        </div>
      </div>
    </motion.main>
  );
}
