import { useContext, useState } from "react";
import { ModalTasks } from "../../../contexts/ModalContext";
import TaskElement from "./TaskElement";

export default function TaskReminder() {
    const { showModal, handleShowModal } = useContext(ModalTasks);
    return (
        <>
            <div className="w-2/5 px-7 py-5 mt-3 2xl:mt-10 mb-16 2xl:mb-36 rounded-lg shadow-2xl bg-white overflow-hidden">
                <h2 className="text-xl 2xl:text-3xl h-6 2xl:h-10 font-bold text-main-color cursor-default overflow-hidden">
                    Tasks
                </h2>
                <TaskElement
                    title="Starship Trooper"
                    delegateFrom={"Kan Manager"}
                    delegateTo={"Kan Junior"}
                    delegateDate={"2022-05-19"}
                    deadline={"2022-05-22"}
                    clientBrief={{
                        content:
                            "Lorem Ipsum is simply dummy text of the printing and sadkalsjdlkasjdl; asjd;lksajdkl;asjlk;djas lk;dasl;kdj asl;jdkl;asj d;laskj das;lkd jas;lkdjsa;ldkasjd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o",
                        version: 2,
                        lastUpdate: "2022-12-12",
                    }}
                    Tasks={"3D-Model"}
                    handleShowModal={handleShowModal}
                    showModal={showModal}
                />
                <TaskElement
                    title="Starship Trooper"
                    delegateFrom={"Kan Manager"}
                    delegateTo={"Kan Junior"}
                    delegateDate={"2022-05-19"}
                    deadline={"2022-05-22"}
                    clientBrief={{
                        content:
                            "Lorem Ipsum is simply dummy text of the printing and sadkalsjdlkasjdl; asjd;lksajdkl;asjlk;djas lk;dasl;kdj asl;jdkl;asj d;laskj das;lkd jas;lkdjsa;ldkasjd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o",
                        version: 2,
                        lastUpdate: "2022-12-12",
                    }}
                    Tasks={"3D-Model"}
                    handleShowModal={handleShowModal}
                    showModal={showModal}
                />
                <TaskElement
                    title="Starship Trooper"
                    delegateFrom={"Kan Manager"}
                    delegateTo={"Kan Junior"}
                    delegateDate={"2022-05-19"}
                    deadline={"2022-05-22"}
                    clientBrief={{
                        content:
                            "Lorem Ipsum is simply dummy text of the printing and sadkalsjdlkasjdl; asjd;lksajdkl;asjlk;djas lk;dasl;kdj asl;jdkl;asj d;laskj das;lkd jas;lkdjsa;ldkasjd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o",
                        version: 2,
                        lastUpdate: "2022-12-12",
                    }}
                    Tasks={"3D-Model"}
                    handleShowModal={handleShowModal}
                    showModal={showModal}
                />
            </div>
        </>
    );
}
