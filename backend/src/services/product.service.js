const Product = require('../models/Product.model');
const { removeFile } = require('../utils/file.utils');
const Filter = require('../utils/filter.utils');
const CategoryService = require('./category.service');
const CollectionService = require('./collection.service');
const errors = require('../const/errors');

class ProductService {
    async create(title, desc, price, photos, prop, materials, colors, categoryId, collectionId) {
        const category = await CategoryService.get(categoryId);
        const collection = await CollectionService.get(collectionId);

        const product = new Product({ 
            title, 
            desc, 
            price, 
            photos,
            prop,
            materials,
            colors: colors.colors,
            colorsList: colors.list,
            category: category._id,
            categoryTitle: category.title,
            collection: collection._id,
            collectionTitle: collection.title
        });

        await product.save();
        return product;
    }

    async getAll(page = 1, limit = 12, filter = {}) {
        const skip = (page - 1) * limit;
        
        let query = {};
        if (filter.category) query.category = filter.category;
        if (filter.collection) query.collection = filter.collection;
        if (filter.priceMin || filter.priceMax) {
            query.price = {};
            if (filter.priceMin) query.price.$gte = filter.priceMin;
            if (filter.priceMax) query.price.$lte = filter.priceMax;
        }

        const products = await Product.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await Product.countDocuments(query);
        
        return {
            products,
            total,
            page,
            pages: Math.ceil(total / limit)
        };
    }

    async getById(id) {
        const product = await Product.findById(id);
        if (!product) {
            throw new Error(errors.PRODUCT_NOT_FOUND);
        }
        return product;
    }

    async update(id, updateData) {
        const product = await this.getById(id);
        
        Object.assign(product, updateData);
        await product.save();
        
        return product;
    }

    async delete(id) {
        const product = await this.getById(id);
        
        // Remove associated files
        if (product.photos && product.photos.length > 0) {
            product.photos.forEach(photo => {
                removeFile(photo);
            });
        }
        
        await Product.findByIdAndDelete(id);
        return { message: 'Product deleted successfully' };
    }

    async search(searchTerm, page = 1, limit = 12) {
        const skip = (page - 1) * limit;
        
        const query = {
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { desc: { $regex: searchTerm, $options: 'i' } },
                { categoryTitle: { $regex: searchTerm, $options: 'i' } },
                { collectionTitle: { $regex: searchTerm, $options: 'i' } }
            ]
        };

        const products = await Product.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await Product.countDocuments(query);
        
        return {
            products,
            total,
            page,
            pages: Math.ceil(total / limit)
        };
    }
}

module.exports = new ProductService();