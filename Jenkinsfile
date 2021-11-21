pipeline {
	agent { docker { image: 'node:16.13-alpine' } }
	stages {
		stage('build') {
			steps {
				sh 'npm --version'
			}
		}
	}
}
