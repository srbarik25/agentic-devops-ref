# Command Line Interface (CLI)

The `cli.py` module provides a command-line interface for interacting with the Agentic DevOps framework. It allows users to execute DevOps operations from the terminal.

## Getting Started

To use the CLI, ensure you have the `agentic_devops` package installed. You can then run the `run_cli.py` script or install the package in your environment and use the `devops-agent` command.

## Commands

The CLI is structured into command groups, each representing a major functional area:

- `ec2`: Commands for managing Amazon EC2 instances.
- `github`: Commands for interacting with GitHub repositories and issues.
- `deploy`: Commands for deploying applications to different environments.

### ec2 Commands

- `list-instances`: Lists EC2 instances, with options to filter by state and region, and output format.
- `get-instance`: Gets details of a specific EC2 instance by ID.
- `create-instance`: Creates a new EC2 instance with specified parameters like name, type, AMI ID, etc.
- `start-instance`: Starts an EC2 instance.
- `stop-instance`: Stops an EC2 instance.
- `terminate-instance`: Terminates an EC2 instance.
- `deploy-from-github`: Deploys an application from a GitHub repository to an EC2 instance.

  ```bash
  run_cli.py ec2 list-instances --state running --region us-west-2 --output json
  run_cli.py ec2 create-instance --name my-instance --type t2.micro --ami-id ami-xxxxxxxx --region us-east-1
  ```

### github Commands

- `list-repos`: Lists GitHub repositories for an organization or user.
- `get-repo`: Gets details of a specific GitHub repository.
- `get-readme`: Gets the README content of a GitHub repository.
- `list-branches`: Lists branches in a GitHub repository.

  ```bash
  run_cli.py github list-repos --org example-org --output table
  run_cli.py github get-repo owner/repo-name --output json
  ```

### deploy Commands

- `github-to-ec2`: Deploys an application from GitHub to an EC2 instance.
- `github-to-s3`: Deploys a static website from GitHub to an S3 bucket (not yet implemented).

  ```bash
  run_cli.py deploy github-to-ec2 --instance-id i-xxxxxxxx --repo owner/repo-name --branch main --path /var/www/html --region us-east-1
  ```

## Options

- `--debug`: Enables debug logging for more detailed output.

## Error Handling

The CLI provides user-friendly error messages and suggestions for common issues. It handles errors related to credentials, AWS services, and GitHub API.

## Examples

For more examples, refer to the [examples directory](../../examples). You can also run `run_cli.py --help` or `run_cli.py <command-group> --help` to get detailed help on commands and options.