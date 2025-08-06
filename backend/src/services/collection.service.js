const Collection = require('../models/Collection.model');
const errors = require('../const/errors');

class CollectionService {
    async create(title) {
        const existingCollection = await Collection.findOne({ title });
        if (existingCollection) {
            throw new Error('Collection already exists');
        }

        const collection = new Collection({ title });
        await collection.save();
        return collection;
    }

    async getAll() {
        return await Collection.find().sort({ createdAt: -1 });
    }

    async get(id) {
        const collection = await Collection.findById(id);
        if (!collection) {
            throw new Error('Collection not found');
        }
        return collection;
    }

    async update(id, title) {
        const collection = await this.get(id);
        
        // Check if new title already exists (excluding current collection)
        const existingCollection = await Collection.findOne({ 
            title, 
            _id: { $ne: id } 
        });
        if (existingCollection) {
            throw new Error('Collection with this title already exists');
        }
        
        collection.title = title;
        await collection.save();
        return collection;
    }

    async delete(id) {
        const collection = await this.get(id);
        await Collection.findByIdAndDelete(id);
        return { message: 'Collection deleted successfully' };
    }
}

module.exports = new CollectionService();