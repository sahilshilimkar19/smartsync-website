# AWS Deployment Guide for SmartSync Website

This guide walks you through deploying your Vite React Frontend (smartsync) and Node.js Backend (smartsync-backend) on a free-tier Ubuntu EC2 instance on AWS.

## 1. Launching an EC2 Instance
1. Log into your **AWS Management Console** and go to **EC2**.
2. Click **Launch Instance**.
3. Choose **Ubuntu Server 24.04 LTS** (or 22.04 LTS) from the Quick Start AMIs.
4. Choose the **`t2.micro`** or **`t3.micro`** instance type (these are Free Tier eligible).
5. Create and download a new **Key Pair** (a `.pem` file) so you can connect to the server via SSH. Keep this file safe.
6. Under **Network settings**, allow **SSH traffic from Anywhere**, and also check the boxes to **Allow HTTP and HTTPS traffic from the internet**.
7. Click **Launch instance**.

## 2. Connect to Your Server
Open a terminal on your PC (such as PowerShell or Git Bash) and SSH into the server using the `.pem` file you downloaded. Make sure to replace `<your-ec2-public-ip>` with the actual public IPv4 address shown in the AWS console.
```bash
ssh -i "path-to-your-key.pem" ubuntu@<your-ec2-public-ip>
```

## 3. Install Required Software
Run the following commands on the server to install Node.js, NPM, Git, Nginx, and PM2 (a supervisor manager to keep your backend alive indefinitely):
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js (Version 20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Install PM2 globally
sudo npm install -g pm2
```

## 4. Upload Your Code to the EC2 Instance
You can push your local folder to a GitHub repository, and then clone it directly onto the server. 
*(Alternatively, you can use SCP or an SFTP tool like FileZilla to copy the files directly from your PC to the server).*

Assuming you used Git:
```bash
git clone https://github.com/your-username/your-repo-name.git smartsyncwebsite
cd smartsyncwebsite
```

## 5. Setup & Start the Node.js Backend
Navigate into the backend folder, configure your environment variables, and start it so it runs continuously in the background.
```bash
cd smartsync-backend

# Install package dependencies
npm install

# Recreate your .env config with your target variables
# Be sure to put in your real app-password from Google / Nodemailer
echo "PORT=5000" > .env
echo "EMAIL_USER=your-email@gmail.com" >> .env
echo "EMAIL_PASS=your-app-password" >> .env
# Optional: where Contact Us inquiries are delivered (this is already the default)
echo "CONTACT_TO_EMAIL=himanshu.shah@synconic.in" >> .env

# Start the server using PM2
pm2 start server.js --name "smartsync-api"

# Set PM2 to automatically restart on server reboots
pm2 save
pm2 startup
# (Run the command PM2 outputs at the end to finalize the startup script)
```

## 6. Build the Vite Frontend
Next, build the optimized static files for your frontend.
```bash
cd ../smartsync

# Install dependencies
npm install

# In ContactUs.jsx, your fetch request defaults to localhost:5000. When hosted,
# we need it to point to your new IP so it routes through Nginx.
echo "VITE_API_URL=http://<your-ec2-public-ip>/api/contact" > .env

# Build the frontend (This will create a `dist` folder)
npm run build
```

## 7. Configure Nginx to Serve Both
Finally, we configure Nginx to serve the Vite frontend `dist` directory on standard HTTP port 80, and proxy any traffic going to `/api/` over to your PM2 backend running on port `5000`.

Create a new Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/smartsync
```
Paste this configuration (Replace `<your-ec2-public-ip>` with your server's Public IP or domain name):
```nginx
server {
    listen 80;
    server_name <your-ec2-public-ip>;

    # Serve the React Frontend Build
    root /home/ubuntu/smartsyncwebsite/smartsync/dist;
    index index.html;

    # Fallback to index.html for React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to Node.js Backend
    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
*(Save and exit Nano by pressing `Ctrl + X`, then `Y`, then `Enter`)*

Enable the site and restart Nginx:
```bash
# Link the site
sudo ln -s /etc/nginx/sites-available/smartsync /etc/nginx/sites-enabled/

# Remove the default Nginx welcome site to avoid port 80 conflicts
sudo rm /etc/nginx/sites-enabled/default

# Restart Nginx
sudo systemctl restart nginx
```

Once this is complete, you should be able to type your EC2 Public IP address directly into any browser and see your site live and perfectly functional.
