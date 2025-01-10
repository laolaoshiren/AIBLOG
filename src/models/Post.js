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
        const { title, content, excerpt, author_id, status = 'draft', tags = [] } = data;
        
        try {
            // 开始事务
            await this.db.prepare('BEGIN').run();
            
            // 插入文章
            const result = await this.db.prepare(`
                INSERT INTO posts (title, content, excerpt, slug, author_id, status, published_at)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `).bind(
                title,
                content,
                excerpt || content.substring(0, 200),
                this.slugify(title),
                author_id,
                status,
                status === 'published' ? new Date().toISOString() : null
            ).run();
            
            const postId = result.lastRowId;
            
            // 处理标签
            if (tags.length > 0) {
                for (const tagName of tags) {
                    // 获取或创建标签
                    const tagResult = await this.db.prepare(`
                        INSERT INTO tags (name, slug)
                        VALUES (?, ?)
                        ON CONFLICT(name) DO UPDATE SET name=name
                        RETURNING id
                    `).bind(tagName, this.slugify(tagName)).run();
                    
                    const tagId = tagResult.lastRowId;
                    
                    // 创建文章标签关联
                    await this.db.prepare(`
                        INSERT INTO post_tags (post_id, tag_id)
                        VALUES (?, ?)
                    `).bind(postId, tagId).run();
                }
            }
            
            // 提交事务
            await this.db.prepare('COMMIT').run();
            
            return { id: postId };
        } catch (error) {
            // 回滚事务
            await this.db.prepare('ROLLBACK').run();
            throw error;
        }
    }

    async update(id, data) {
        const { title, content, excerpt, status, tags } = data;
        
        try {
            // 开始事务
            await this.db.prepare('BEGIN').run();
            
            // 更新文章
            await this.db.prepare(`
                UPDATE posts
                SET title = ?,
                    content = ?,
                    excerpt = ?,
                    status = ?,
                    published_at = CASE 
                        WHEN status = 'published' AND published_at IS NULL THEN CURRENT_TIMESTAMP
                        ELSE published_at
                    END
                WHERE id = ?
            `).bind(
                title,
                content,
                excerpt || content.substring(0, 200),
                status,
                id
            ).run();
            
            // 如果提供了标签，更新标签
            if (tags) {
                // 删除现有的标签关联
                await this.db.prepare('DELETE FROM post_tags WHERE post_id = ?').bind(id).run();
                
                // 添加新的标签
                for (const tagName of tags) {
                    const tagResult = await this.db.prepare(`
                        INSERT INTO tags (name, slug)
                        VALUES (?, ?)
                        ON CONFLICT(name) DO UPDATE SET name=name
                        RETURNING id
                    `).bind(tagName, this.slugify(tagName)).run();
                    
                    const tagId = tagResult.lastRowId;
                    
                    await this.db.prepare(`
                        INSERT INTO post_tags (post_id, tag_id)
                        VALUES (?, ?)
                    `).bind(id, tagId).run();
                }
            }
            
            // 提交事务
            await this.db.prepare('COMMIT').run();
            
            return { success: true };
        } catch (error) {
            // 回滚事务
            await this.db.prepare('ROLLBACK').run();
            throw error;
        }
    }

    async delete(id) {
        try {
            await this.db.prepare('DELETE FROM posts WHERE id = ?').bind(id).run();
            return { success: true };
        } catch (error) {
            throw error;
        }
    }

    // 辅助方法：将标题转换为 URL 友好的 slug
    slugify(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\u4e00-\u9fa5]+/g, '-') // 保留中文字符
            .replace(/^-+|-+$/g, '');
    }
}
