const Category = require('../models/Category.model');
const errors = require('../const/errors');

class CategoryService {
    async create(title) {
        const existingCategory = await Category.findOne({ title });
        if (existingCategory) {
            throw new Error('Category already exists');
        }

        const category = new Category({ title });
        await category.save();
        return category;
    }

    async getAll() {
        return await Category.find().sort({ createdAt: -1 });
    }

    async get(id) {
        const category = await Category.findById(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    }

    async update(id, title) {
        const category = await this.get(id);
        
        // Check if new title already exists (excluding current category)
        const existingCategory = await Category.findOne({ 
            title, 
            _id: { $ne: id } 
        });
        if (existingCategory) {
            throw new Error('Category with this title already exists');
        }
        
        category.title = title;
        await category.save();
        return category;
    }

    async delete(id) {
        const category = await this.get(id);
        await Category.findByIdAndDelete(id);
        return { message: 'Category deleted successfully' };
    }
}

module.exports = new CategoryService();