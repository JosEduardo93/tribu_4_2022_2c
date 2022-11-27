import { useState } from "react";
// import {
//   BsQuestionCircleFill,
//   BsFillExclamationCircleFill,
//   BsFillCaretLeftFill,
//   BsCircleFill,
// } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { ImMoveUp } from "react-icons/im";
import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./../../Styles/Proyectos/Project.module.css";

function Project({ project, editSelected, setEditSelected }) {
    const parseDate = (fecha) => {
        const parse = new Date(fecha)
        return parse.toLocaleDateString();
    }

    const getState = (estado) => {
        var style;
        if (estado === "notStarted") {
          style = styles.notStarted;
        } else if (estado === "initiated") {
          style = styles.initiated;
        } else if (estado === "finished") {
          style = styles.finished;
        } else if (estado === "canceled") {
          style = styles.canceled;
        }
        return style;
    };
    // const [typeHovered, setTypeHovered] = useState(false);
    const [escalarSelected, setEscalarSelected] = useState(false);
    
    return (
        <div className={styles.container}>
            <div className={styles.projectContainer}>
                <div className={styles.project}>
                    <div className={styles.sectionOne}>
                        <div className={styles.headerSection}>
                            <div className={styles.titleSection}>
                                {project.name}
                            </div>
                            <div
                                onClick={() => setEscalarSelected(true)}
                                className={styles.escalar}
                            >
                                Escalar ticket
                                <ImMoveUp size={"1.5vw"} color={"white"} />
                            </div>    
                            <div className={styles.descripcion}>{project.description}</div>
                            <div className={styles.footerSection}>
                            <div className={styles.marginLeft}>"{project.assignedClient}"</div>
                            <div className={styles.marginLeft}>-</div>
                            <div className={styles.marginLeft}>
                                Iniciado el {parseDate(project.idealInitDate)}
                            </div>
                            <div className={styles.marginLeft}>-</div>
                            <div className={styles.marginLeft}>
                                Finalización esperada {parseDate(project.idealEndDate)}
                            </div>
                            </div>
                            <div className={styles.sectionTwo}>
                                <div className={styles.estado + " " + getState(project.status)}>
                                    {project.status}
                                </div>
                            </div>
                            <div onClick={() => {
                                setEditSelected(true);
                                }}
                                className={
                                    editSelected ? styles.edit + " " + styles.selected : styles.edit
                            }>
                                <MdEdit
                                    size={"1.5vw"}
                                    color={editSelected ? "white" : "rgba(0,53,108,1)"}
                                />
                            </div>
                            {editSelected ? (
                                <div className={styles.editSelected}>
                                    <div
                                        className={styles.editCancel}
                                        onClick={() => setEditSelected(false)}
                                    >
                                        <IoClose size={"2vw"} color={"white"} />
                                    </div>
                                    <div className={styles.editConfirm}>
                                        <HiCheck size={"2vw"} color={"white"} />
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.delete}>
                                    <MdDelete size={"1.5vw"} color={"rgba(0,53,108,1)"} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>        
            </div>     
        </div>
    )
}

export default Project;
