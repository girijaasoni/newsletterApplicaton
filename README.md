# Newsletter Application
 
## Overview

This is a full-stack web application for posting articles. Built with [Ruby on Rails](https://rubyonrails.org/), [React](https://reactjs.org/), [PostgreSQL](https://www.postgresql.org/) and [Patternfly](https://www.patternfly.org/v4/).

## Prerequisites

Before the installation, please make sure to have global installations of-

- node v16 or higher
- npm v9 or higher
- PostgreSQL (if running a local DB instance)
- Ruby On Rails (ruby@3.1.2 & rails@7.0.4)

## Set up development environment

1. Get the code. Clone this git repository:

    ```
    git clone https://github.com/girijaasoni/newsletterApplicaton.git
    cd newsletterApplicaton
    ```

2. Execute `bundle install && npm install` to configure the local environment.
3. Update the DB configuration in `config/database.yml`
4. Perform DB initialization/migration and seeding

    ```
    $ rails db:create
    $ rails db:migrate
    $ rails db:seed
    ```

5. Start the development server `rails s`

## Usage

This application uses npm and rails scripts for testing and development.

- `rails s`: run the development version of the app
- `rails db:create`: perform DB initialization
- `rails db:migrate`: perform DB migrations
- `rails db:seed`: perform DB seeding
- `npm run lint:` perform linting of the FE code
- `npm run test`: perform testing of the FE code
- `bundle exec rubocop:` perform linting of the BE code
- `bundle exec rake test`: perform testing of the BE code

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or add. Please make sure to update tests as appropriate.
