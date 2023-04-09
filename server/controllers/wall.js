import axios from "axios";

const identifyWalls = async (req, res) => {
    try {
        const { filename, color="#FFFF00" } = req.body;
        
        const response = await axios.post("http://127.0.0.1:5000/generate_color", { filename, color });
        console.log(response.data)
        return res.status(200).json({ message: response.data })
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ error: error.message });
    }
}

export { identifyWalls };