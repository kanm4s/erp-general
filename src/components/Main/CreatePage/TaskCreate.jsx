import { motion } from "framer-motion";
import { Form } from "../../Form/Form";
import Input from "../../Form/Input";
import SubmitButton from "../../Form/SubmitButton";
import * as yup from "yup";
import TextArea from "../../Form/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTaskApi,
  getTaskById,
  updateTaskByIdApi,
} from "../../../api/project";
import { useEffect, useState } from "react";

export default function TaskCreate() {
  const navigate = useNavigate();
  const { projectId, taskId } = useParams();
  const [task, setTask] = useState({});
  useEffect(() => {
    if (taskId) {
      const fetchTaskById = async () => {
        const res = await getTaskById(taskId);
        setTask({ ...res.data.task });
      };
      fetchTaskById();
    }
  }, [taskId]);

  const schema = yup.object().shape({
    name: yup.string().required("Project name is required"),
    type: yup.string().required("Project name is required"),
    deadLine: yup.date().required("Date is required"),
    brief: yup.string(),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "not match"),
  });

  const onSubmit = async ({ name, type, deadLine, brief }) => {
    try {
      if (taskId) {
        await updateTaskByIdApi(name, taskId, deadLine, type, brief);
        navigate(`/Projects/${projectId}`);
      } else {
        await createTaskApi(name, projectId, deadLine, type, brief);
        navigate(`/Projects/${projectId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {taskId ? (
        Object.keys(task).length > 0 && (
          <motion.main
            className="relative flex flex-col px-56 h-screen grow gap-1 bg-neutral-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-16 2xl:px-20 pt-9 mt-10 mb-6">
              Edit Task
            </h1>
            <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
              <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
                <div className="grid grid-cols-2">
                  <Form
                    schema={schema}
                    defaultValues={{
                      name: task.name,
                      type: task.type,
                      deadLine: task.deadLine,
                      brief: task.brief,
                    }}
                    onSubmit={onSubmit}
                  >
                    <div className="flex flex-col gap-3">
                      <div>
                        <Input name="name" type="text" />
                      </div>
                      <div>
                        <Input name="type" type="text" />
                      </div>
                      <div>
                        <Input name="deadLine" type="date" />
                      </div>
                      <div>
                        <TextArea name="brief" type="text" />
                      </div>
                      <SubmitButton>comfirm</SubmitButton>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </motion.main>
        )
      ) : (
        <motion.main
          className="relative flex flex-col px-56 h-screen grow gap-1 bg-neutral-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-16 2xl:px-20 pt-9 mt-10 mb-6">
            Create Task
          </h1>
          <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
            <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
              <div className="grid grid-cols-2">
                <Form schema={schema} onSubmit={onSubmit}>
                  <div className="flex flex-col gap-3">
                    <div>
                      <Input name="name" type="text" />
                    </div>
                    <div>
                      <Input name="type" type="text" />
                    </div>
                    <div>
                      <Input name="deadLine" type="date" />
                    </div>
                    <div>
                      <TextArea name="brief" type="text" />
                    </div>
                    <SubmitButton onClick={onSubmit}>comfirm</SubmitButton>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </motion.main>
      )}
    </>
  );
}
