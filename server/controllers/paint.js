import Paint from "../models/Paint.js";
import axios from "axios";
import shuffle from "../helpers/shuffle.js";

const paintWall = async (req, res) => {
    try {
        const { filename, color="#FFFF00" } = req.body;
        
        const response = await axios.post("http://127.0.0.1:5000/generate_color", { filename, color });
        console.log(response.data)
        return res.status(200).json({ message: response.data })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
    }
}

const getPaints = async (req, res) => {
    try {
        const { brand = null } = req.query;

        let response;
        if(brand) response = await Paint.find({ brand });
        else response = await Paint.find();

        const shuffleData = shuffle(response);
        return res.status(200).json(shuffleData);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
    }
}

export { paintWall, getPaints };