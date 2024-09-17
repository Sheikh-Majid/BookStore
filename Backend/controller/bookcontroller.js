import Book from "../models/book.model.js"


export const getBook = async(req , res) => {
    
    try {
        const data = await Book.find();
        return res.status(200).json({
            success: true,
            data : data
        })
    } catch (error) {
        return res.status(404).json({
            sccuess: true,
            message : "All Books fetch successfully!"
        })
    }
}