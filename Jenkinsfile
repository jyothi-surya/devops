pipeline {
    agent any  // Runs on any available agent

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'webform', url: 'https://github.com/jyothi-surya/devops.git'
            }
        }

        stage('Build') {
            steps {
                echo 'No build required for HTML, CSS, JS'
            }
        }

        stage('Linting & Validation') {
            steps {
                echo 'Validating HTML, CSS, and JS...'
                // Example: Add linting tools for quality checks
                // npm install -g htmlhint csslint eslint
                // htmlhint **/*.html
                // csslint **/*.css
                // eslint **/*.js
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // If using Jest, Cypress, Selenium, etc., add test commands
                // Example: npm test
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                // Example deployment: Copy files to a web server
                // scp -r * user@yourserver:/var/www/html/
            }
        }
    }
}
