const express = require('express');
const book = require('../models/book');
const router = express.Router();
const Book= require('../models/book');

//creating a book
router.post('/',(req,res)=>{
    const book = new Book({
        title:req.body.title,
        price:req.body.price,
        author:req.body.author,
        publisher:{name:req.body.publisher.name,
            city:{cityname:req.body.publisher.city.cityname,
            zipcode:req.body.publisher.city.zipcode}}
    });
    book.save().
    then (data =>{
        res.json(data);
    }).catch(err =>{
        res.json({message:err});
    })
});

//getting all books
router.get('/',async(req,res) =>{try
    {
        const books = await book.find();
        res.json(books);
    }catch (err){res.json({message:err});
}
});

//getting a post by id
router.get('/:bookid', async(req,res) =>{try
    {
        const book = await Book.findById(req.params.bookid);
        res.json(book);
    }catch(err){res.json({message:err});
}

});

//deleting a book
router.delete('/:bookid',async(req,res)=>{try
    {
        const removebook = await Book.deleteOne({
           _id : req.params.bookid});
           res.json(removebook);
        }catch (err){
            res.json({message:err});
        
    }
});

//update a book by id
router.patch('/:bookid',async(req,res)=>{ try
    {
        const book = await Book.findOne({
            _id : req.params.bookid});
            if(req.body.title){
                book.title= req.body.title;
            }
            if(req.body.price){
                book.price= req.body.price;
            }
            if(req.body.author){
                book.author= req.body.author;
            }
            if (req.body.publisher){
                book.publisher = req.body.publisher;
            }
            await book.save();
            res.json(book);
        }catch(err){
            res.json({message:err});
    }
});
//update by put method
router.put('/:bookid',async(req,res)=>{ try
    {
        const editbook = await Book.findByIdAndUpdate({
            _id : req.params.bookid});
            res.json(editbook);
        }catch(err){
            res.json({message:err});
    }
});

module.exports= router;
