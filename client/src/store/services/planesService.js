import axios from "axios";

const getPlanes = async () => {
    const planes = await axios.get('/api/planes');
    return planes.data;
}

const getPlane = async (id) => {
    const planes = await axios.get(`/api/planes/${id}`);
    return planes.data;
}

const createPlane = async (planeData) => {
    const planes = await axios.post('/api/planes', planeData);
    return planes.data;
}

const planesService = {
    getPlanes,
    getPlane,
    createPlane
}

export default planesService;