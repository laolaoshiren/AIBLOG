export class Post {
    static async findAll(db) {
        const stmt = db.prepare('SELECT * FROM posts WHERE status = ? ORDER BY published_at DESC');
        const { results } = await stmt.bind('published').all();
        return results.map(post => ({
            ...post,
            tags: post.tags ? JSON.parse(post.tags) : []
        }));
    }

    static async findById(db, id) {
        const stmt = db.prepare('SELECT * FROM posts WHERE id = ? AND status = ?');
        const { results } = await stmt.bind(id, 'published').first();
        if (results && results[0]) {
            const post = results[0];
            post.tags = post.tags ? JSON.parse(post.tags) : [];
            const updateStmt = db.prepare('UPDATE posts SET views = COALESCE(views, 0) + 1 WHERE id = ?');
            await updateStmt.bind(id).run();
            return post;
        }
        return null;
    }

    static async findByTag(db, tag) {
        const stmt = db.prepare('SELECT * FROM posts WHERE status = ? ORDER BY published_at DESC');
        const { results } = await stmt.bind('published').all();
        return results.filter(post => {
            const tags = post.tags ? JSON.parse(post.tags) : [];
            return tags.map(t => t.toLowerCase()).includes(tag.toLowerCase());
        });
    }

    static async findByCategory(db, category) {
        const stmt = db.prepare('SELECT * FROM posts WHERE category = ? AND status = ? ORDER BY published_at DESC');
        const { results } = await stmt.bind(category, 'published').all();
        return results;
    }

    async create(data) {
        const { title, content, excerpt, author_id, status = 'published', category = '未分类', tags = [] } = data;
        const published_at = new Date().toISOString();
        
        const stmt = this.db.prepare(`
            INSERT INTO posts (title, content, excerpt, author_id, status, category, tags, published_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        const result = await stmt.bind(
            title,
            content,
            excerpt || '',
            author_id,
            status,
            category,
            JSON.stringify(tags),
            published_at
        ).run();
        
        return result.lastInsertRowid;
    }

    async update(data) {
        const { id, title, content, excerpt, status, category, tags } = data;
        
        const stmt = this.db.prepare(`
            UPDATE posts 
            SET title = ?,
                content = ?,
                excerpt = ?,
                status = ?,
                category = ?,
                tags = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);
        
        const result = await stmt.bind(
            title,
            content,
            excerpt || '',
            status,
            category,
            JSON.stringify(tags),
            id
        ).run();
        
        return result.changes > 0;
    }
}
