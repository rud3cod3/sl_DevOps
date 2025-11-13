pipeline {
    agent any
    environment {
        DOCKERHUB_USER = 'rud3cod3'        // Your DockerHub username
        IMAGE_NAME = 'burger-site'         // Your image name
        DEPLOY_SERVER = '51.20.51.194'     // EC2-2 Public IP
    }
    stages {
        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKERHUB_USER/$IMAGE_NAME:latest ."
            }
        }
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh "docker push $DOCKER_USER/$IMAGE_NAME:latest"
                }
            }
        }
        stage('Deploy on EC2-2') {
            steps {
                sshagent (credentials: ['ec2-2-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ubuntu@$DEPLOY_SERVER '
                        docker pull $DOCKERHUB_USER/$IMAGE_NAME:latest &&
                        docker rm -f burger-web || true &&
                        docker run -d --name burger-web -p 80:80 $DOCKERHUB_USER/$IMAGE_NAME:latest
                    '
                    """
                }
            }
        }
    }
}

