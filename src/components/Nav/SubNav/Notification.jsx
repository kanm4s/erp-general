import NotificationElement from "./NotificationElement";

export default function Notification() {
  return (
    <div className="flex flex-col justify-between px-6 py-8 h-full dark:bg-gray-700 ">
      <div className="relative">
        <h1 className="text-4xl font-bold h-16 text-invert-color cursor-default 2xl:pl-10 mb-10">
          Notification
        </h1>
        <div>
          <NotificationElement />
          <NotificationElement />
          <NotificationElement />
        </div>
      </div>
    </div>
  );
}
