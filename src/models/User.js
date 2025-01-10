export class User {
    constructor(db) {
        this.db = db;
    }

    async findByUsername(username) {
        return await this.db.prepare('SELECT * FROM users WHERE username = ?')
            .bind(username)
            .first();
    }

    async create(data) {
        const { username, password, email, role = 'author' } = data;
        const result = await this.db.prepare(
            `INSERT INTO users (username, password, email, role) 
             VALUES (?, ?, ?, ?)`
        )
        .bind(username, password, email, role)
        .run();
        
        return result.lastRowId;
    }

    async update(id, data) {
        const { email, password, role } = data;
        const result = await this.db.prepare(
            `UPDATE users 
             SET email = ?, password = ?, role = ? 
             WHERE id = ?`
        )
        .bind(email, password, role, id)
        .run();
        
        return result.success;
    }

    async delete(id) {
        const result = await this.db.prepare('DELETE FROM users WHERE id = ?')
            .bind(id)
            .run();
        
        return result.success;
    }
}
