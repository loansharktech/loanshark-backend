
module.exports = {
	  apps: [
		      {
			            name: "loanshark-backend",
			            cwd: "/home/ec2-user/loanshark-backend/loanshark-backend/",
			            script: "npm run start",
			            instances: 1,
			            env: {
					    PORT: 3000,
					 },
			          },
		    ]
};
