import { motion } from "framer-motion";
import EmailListMain from "./EmailList/EmailListMain";

export default function EmailPage() {
  return (
    <motion.main
      className="relative px-48 flex flex-col h-screen grow gap-1 bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-6">
        Email
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
        <EmailListMain />
      </div>
    </motion.main>
  );
}
