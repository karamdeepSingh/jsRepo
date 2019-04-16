pipeline {
    agent any

    stages {
        stage ('Compile Stage') {

            steps {
                echo "starting"
            }
        }

        stage ('Testing Stage') {

            steps {
                npm install
                npm test
            }
        }

    }
}