pipeline {
    agent any

     environment {
        ARR = credentials('id')
    }

    stages {
     
        stage ('Compile Stage') {

            steps {
                echo "starting"
                echo ARR
                echo ARR_USR
                echo ARR_PSW
            }
        }

        stage ('Testing Stage') {

            steps {
                sh 'npm install'
                 sh 'npm test'
            }
        }

    }
}