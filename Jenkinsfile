pipeline {
    agent any
    environment {
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm-cache"
}

    tools {
        nodejs "NodeJS" // Replace with the actual name
    }

    triggers {
        // This section specifies which events trigger your pipeline
        githubPush() // This will trigger the pipeline on webhook push events
        // You can add more triggers if needed
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
                bat 'npm install --cache .npm-cache'
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