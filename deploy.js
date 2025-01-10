const { execSync } = require('child_process');
const fs = require('fs');

async function deploy() {
    try {
        // 运行 wrangler deploy 并捕获输出
        console.log('Deploying to Cloudflare Workers...');
        const deployOutput = execSync('npx wrangler deploy', { encoding: 'utf8' });
        
        // 从输出中提取版本ID
        const versionMatch = deployOutput.match(/Upload complete! Worker deployed with version ID (\w+)/);
        if (!versionMatch) {
            throw new Error('Could not find version ID in deployment output');
        }
        
        const versionId = versionMatch[1];
        console.log(`Deployed with version ID: ${versionId}`);
        
        // 创建包含版本ID的文件
        fs.writeFileSync('worker-version.txt', versionId);
        
        // 提交更改
        execSync('git add worker-version.txt');
        execSync(`git commit -m "Deploy: ${versionId}"`);
        
        // 创建并推送tag
        execSync(`git tag -a worker-${versionId} -m "Worker version ${versionId}"`);
        execSync('git push origin master --tags');
        
        console.log(`Successfully deployed and tagged version ${versionId}`);
    } catch (error) {
        console.error('Deployment failed:', error.message);
        process.exit(1);
    }
}

deploy();
