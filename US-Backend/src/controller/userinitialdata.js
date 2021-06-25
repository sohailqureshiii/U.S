const Category = require('../models/category');
const Product = require('../models/product');
const store = require('../models/store');
const StoreLocation = require('../models/location')
const User = require('../models/auth');



function createCategories(categories, parentId = null) {

    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    } else {
        category = categories.filter(cat => cat.parentId == parentId);

    }
    for (let cate of category) {
        categoryList.push({
            _id: cate.id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            categoryIcon:cate.categoryIcon,
            // type: cate.type,
            children: createCategories(categories, cate._id)
        });
    }

    return categoryList;
};


exports.userinitialData = async (req, res) => {
    
    const categories = await Category.find({}).exec();
    const locations = await StoreLocation.find({}).exec();

    const stores = await store.find({})
    .select('_id userName shopName shopType shopEmail shopCategory shopPhoneNo shopAddress createdBy createdAt shopLocation')
    .populate({path: 'shopCategory', select: '_id name'})
    // .populate({path:'createdBy',select: '_id username'})
    .populate({path:'shopLocation',select: '_id name'})
    .exec();
    const products = await Product.find({})
        .select('_id name price quantity slug description productPictures category createdBy outOfStock ParCategory')
        .populate({path: 'category', select: '_id name'})
        .populate({path: 'ParCategory', select: '_id name'})
        .populate({path:'createdBy',select: '_id shopName shopLocation'})
        .populate({path: 'createdBy.shopLocation', select: '_id name'})
        .exec();
    res.status(200).json({
        categories:createCategories(categories),
        products,
        stores,
        locations
    })
}


exports.userData = async(req,res) =>{

        User.findOne({_id:req.user._id})
        .exec(async(error, user) => {
            if (error) return res.status(400).json({ error })
            if (user) {
             const { following } = user;
             const followingProduct = await Product.find({createdBy:{$in:following}})
             .select('_id name price quantity slug description productPictures category createdBy outOfStock ParCategory')
            .populate({path: 'category', select: '_id name'})
            .populate({path: 'ParCategory', select: '_id name'})
            .populate({path:'createdBy',select: '_id shopName shopLocation'})
             .exec();
             const followingStore = await store.find({_id:{$in:following}})
             .select('shopName')
             .exec();
             res.status(200).json({
                following,
                followingProduct,
                followingStore

             })
                   
            } 
        })
    
}