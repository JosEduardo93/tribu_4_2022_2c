import axios from "axios";

async function ProjectViewList(state) {
    const list = await axios.get("https://project-api-kurk.onrender.com/api/projects");
    state(list.data)
}

export default ProjectViewList;