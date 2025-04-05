# k8s-ops-battlefield

A Kubernetes playground with CI-powered testing, ingress routing, and load testing.

## Features

- Auto-provisions KinD cluster via GitHub Actions
- Deploys echo services with NGINX Ingress
- Runs k6 load tests
- Comments results directly on pull requests

## How It Works

On every PR to `main`, the GitHub Actions workflow:

1. Sets up KinD + kubectl
2. Deploys services from `/manifests`
3. Runs `scripts/loadtest.js` with k6
4. Comments load test results on the PR


This project took around 2.5 hours to complete.
