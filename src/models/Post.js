export class Post {
    constructor(db) {
        this.db = db;
    }

    async findAll({ page = 1, limit = 10, status = 'published' } = {}) {
        const offset = (page - 1) * limit;
        const posts = await this.db.prepare(
            `SELECT p.*, u.username as author_name 
             FROM posts p 
             LEFT JOIN users u ON p.author_id = u.id 
             WHERE p.status = ? 
             ORDER BY p.published_at DESC 
             LIMIT ? OFFSET ?`
        )
        .bind(status, limit, offset)
        .all();
        
        return posts;
    }

    async findById(id) {
        const post = await this.db.prepare(
            `SELECT p.*, u.username as author_name 
             FROM posts p 
             LEFT JOIN users u ON p.author_id = u.id 
             WHERE p.id = ?`
        )
        .bind(id)
        .first();
        
        return post;
    }

    async create(data) {
        const { title, content, excerpt, author_id, status = 'draft' } = data;
        const result = await this.db.prepare(
            `INSERT INTO posts (title, content, excerpt, author_id, status, published_at) 
             VALUES (?, ?, ?, ?, ?, ?)`
        )
        .bind(title, content, excerpt, author_id, status, status === 'published' ? new Date().toISOString() : null)
        .run();
        
        return result.lastRowId;
    }

    async update(id, data) {
        const { title, content, excerpt, status } = data;
        const result = await this.db.prepare(
            `UPDATE posts 
             SET title = ?, content = ?, excerpt = ?, status = ?, 
                 published_at = ?, updated_at = CURRENT_TIMESTAMP 
             WHERE id = ?`
        )
        .bind(title, content, excerpt, status, 
              status === 'published' ? new Date().toISOString() : null, id)
        .run();
        
        return result.success;
    }

    async delete(id) {
        const result = await this.db.prepare('DELETE FROM posts WHERE id = ?')
            .bind(id)
            .run();
        
        return result.success;
    }
}
