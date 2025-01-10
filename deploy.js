const { execSync } = require('child_process');
const fs = require('fs');

async function deploy() {
    try {
        // 运行 wrangler deploy 并捕获输出
        console.log('Deploying to Cloudflare Workers...');
        const deployOutput = execSync('npx wrangler deploy', { 
            encoding: 'utf8',
            stdio: ['inherit', 'pipe', 'pipe']
        });
        
        console.log(deployOutput);
        
        // 从输出中提取版本ID
        // Cloudflare的输出格式可能会变化，所以我们使用更宽松的匹配
        const versionMatch = deployOutput.match(/version (\w+)/i) || 
                           deployOutput.match(/ID (\w+)/i);
                           
        if (!versionMatch) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            console.log(`No version ID found, using timestamp: ${timestamp}`);
            const versionId = `deploy-${timestamp}`;
            
            // 创建包含版本ID的文件
            fs.writeFileSync('worker-version.txt', versionId);
            
            // 提交更改
            execSync('git add worker-version.txt');
            execSync(`git commit -m "Deploy: ${versionId}"`);
            
            // 创建并推送tag
            execSync(`git tag -a ${versionId} -m "Worker deployment ${versionId}"`);
            execSync('git push origin master --tags');
            
            console.log(`Successfully created deployment tag: ${versionId}`);
            return;
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
        if (error.stdout) console.log('Stdout:', error.stdout);
        if (error.stderr) console.log('Stderr:', error.stderr);
        process.exit(1);
    }
}

deploy();
