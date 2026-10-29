pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code GitHub se aa gaya'
                sh 'ls -la'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t dashboard-app:${BUILD_NUMBER} -t dashboard-app:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm dashboard-app:latest npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f dashboard-app || true'
                sh 'docker run -d --name dashboard-app -p 3002:3000 dashboard-app:latest'
                sh 'docker ps --filter name=dashboard-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS: Dashboard localhost:3002 pe live hai'
        }
        failure {
            echo 'Pipeline FAILED: console output check karo'
        }
    }
}
