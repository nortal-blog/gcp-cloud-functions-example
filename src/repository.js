
const { Firestore } = require('@google-cloud/firestore');
const { v4: uuidv4 } = require('uuid');

const db = new Firestore();
const collection = db.collection('todos');

module.exports = {
    getAll: async () => {
        const result = [];
        const snapshot = await collection.get();

        snapshot.forEach(doc => {
            result.push({
                id: doc.id,
                ...doc.data()
            })
        });

        return result;
    },
    createNew: async (todo) => {
        const id = uuidv4();

        await collection.doc(id).set({
            task: todo.task
        });

        return id;
    },
    update: async (id, todo) => {
        return await collection.doc(id).set({
            task: todo.task
        });
    }
}