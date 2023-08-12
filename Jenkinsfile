pipeline {
    agent any
    tools {
        nodejs "NodeJS" // Replace with the actual name
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                checkout([$class: 'GitSCM',
                          branches: [[name: 'main']],
                          doGenerateSubmoduleConfigurations: false,
                          extensions: [],
                          submoduleCfg: [],
                          userRemoteConfigs: [[url: 'https://github.com/BohdanUKR/Group-Devops.git']]
                ])
            }
        }
        
        stage('Build') {
            steps {
                // Use Node.js image to build the project
                sh 'npm install -g'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests (replace with your testing command)
                // This is a placeholder to fulfill the requirement
                // No actual tests are run in this example
                echo "< Simulating of test step >"
                // You can include additional steps for code coverage and static analysis here
            }
        }
        
        // Add more stages as needed for deployment, etc.
    }
    
    post {
        success {
            // You can add post-build steps here, such as artifact archiving
            echo "Pipeline completed successfully"
        }
    }
}